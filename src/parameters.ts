export{}

const debugProfile = (name: string, age: number) => {
  console.log(name, age);
}

debugProfile('jin', 29)

type Profile = Parameters<typeof debugProfile>

const profile: Profile = [
  'jin',
  29
]

debugProfile(...profile)