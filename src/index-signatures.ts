export{}

interface Profile {
  name: string
  underTwenty: boolean
  [index: string]: string | number | boolean
}

let profile: Profile = {
  name: 'jin',underTwenty: false
};

profile.name = 'jin';
profile.age = 29;
profile.nationality = 'japan';