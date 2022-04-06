export{}

let name = 'jin';
name = 'sho'

let nickname = 'jin' as const;
// nickname = 'sho

let profile = {
  name: 'jin',
  height: 180
} as const;

profile.name = 'sho';