export interface DirectoryEntry {
  name: string;
  role: string;
  handle: string;
  description: string;
  tags: readonly string[];
  fields: readonly string[];
  projects: readonly { title: string; summary: string; href: string }[];
}

const normalize = (value: string) => value.normalize('NFKC').toLocaleLowerCase().trim();

export function matchesPerson(person: DirectoryEntry, field = 'all', query = ''): boolean {
  if (field !== 'all' && !person.fields.includes(field)) return false;
  const searchable = normalize([
    person.name, person.role, person.handle, person.description, ...person.tags,
    ...person.projects.flatMap(project => [project.title, project.summary]),
  ].join(' '));
  return normalize(query).split(/\s+/).filter(Boolean).every(term => searchable.includes(term));
}

export function activeFields<T extends { id: string }>(fields: readonly T[], people: readonly DirectoryEntry[]): T[] {
  return fields.filter(field => people.some(person => person.fields.includes(field.id)));
}
