export{}

type Profile = {
  name: string
  age: number
}

const me: Profile = {
  name: 'jin',
  age: 29
}

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>

const friend: PersonalDataType = {
  name: 'sho',
  age: 29
}

// friend++;  