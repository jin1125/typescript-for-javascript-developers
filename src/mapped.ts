export{}

type Profile = {
  name: string
  age: number
}

type PartialType = Partial<Profile>;

// type Partial<T> = { [P in keyof T]?: T[P] | undefined; }

// type PartialType = {
//   name?: string | undefined;
//   age?: number | undefined;
// }