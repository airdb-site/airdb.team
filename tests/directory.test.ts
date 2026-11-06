import { test } from 'node:test';
import assert from 'node:assert/strict';
import { matchesPerson, activeFields } from '../src/data/directory.ts';
import { people, fields, dean, bumu } from '../src/data/people.ts';

test('members appear once under each assigned domain',()=>{
  for(const field of dean.fields) {
    const matched = people.filter(p=>matchesPerson(p,field));
    assert.ok(matched.includes(dean));
    assert.equal(new Set(matched.map(p=>p.id)).size,matched.length);
  }
  assert.equal(people.filter(p=>matchesPerson(p)).length,3);
});
test('search spans projects and biographies and normalizes case and full-width characters',()=>{
  assert.ok(matchesPerson(dean,'all','ＤＥＡＮ'));
  assert.ok(matchesPerson(dean,'all','hong kong'));
  assert.ok(matchesPerson(dean,'all','一行代码'));
});
test('keywords and domain are independent constraints, and all keywords must match',()=>{
  assert.ok(matchesPerson(dean,'security','dean 基础设施'));
  assert.equal(matchesPerson(dean,'nonexistent','dean'),false);
  assert.equal(matchesPerson(dean,'security','dean 不存在的内容'),false);
  assert.ok(matchesPerson(dean,'ai','   '));
});
test('filters include only domains with actual members',()=>{
  const available = activeFields([...fields,{id:'unoccupied',label:'未入驻领域'}],people);
  assert.ok(!available.some(field=>field.id==='unoccupied'));
  assert.deepEqual(available.map(f=>f.id),['ai','security','infrastructure','blockchain','computing']);
});
test('matching supports several independent members and shared domains',()=>{
  const other = {...dean,name:'Test Builder',handle:'test',description:'Ocean systems',tags:['海洋'],fields:['ocean'],projects:[]};
  const fixtures=[dean,other];
  assert.deepEqual(fixtures.filter(p=>matchesPerson(p,'ocean')).map(p=>p.name),['Test Builder']);
  assert.equal(fixtures.filter(p=>matchesPerson(p,'all','海洋')).length,1);
  assert.equal(fixtures.filter(p=>matchesPerson(p,'all','不存在')).length,0);
});

test('bumu is searchable by name and interdisciplinary expertise',()=>{
  assert.deepEqual(people.filter(p=>matchesPerson(p,'all','BUMU')).map(p=>p.name),['bumu']);
  assert.ok(matchesPerson(bumu,'computing','30 年'));
  assert.ok(matchesPerson(bumu,'computing','跨学科'));
  assert.equal(matchesPerson(bumu,'all','双学位'),false);
  assert.equal(matchesPerson(bumu,'all','生物医疗'),false);
  assert.ok(matchesPerson(bumu));
  assert.equal(matchesPerson(bumu,'ai'),false);
});

test('blockchain filter and expertise search find aoke',()=>{
  assert.deepEqual(people.filter(p=>matchesPerson(p,'blockchain','可信联盟链')).map(p=>p.name),['aoke']);
});

test('aoke is discoverable by AI expertise and former employer',()=>{
  assert.deepEqual(people.filter(p=>matchesPerson(p,'ai','字节跳动')).map(p=>p.name),['aoke']);
});
