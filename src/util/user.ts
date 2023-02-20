

const FirstNames = ['Troy', 'Abed', 'Patrick', 'Sandy', 'Pearl', 'Spongebob', 'Ross', 'Rachel'];
const LastNames = ['Cheeks', 'Krabs', 'Squarepants', 'Tentacles', 'Smith', 'Johnson', 'Davis'];

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function generateUserId() {
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

function generateName() {
  return `${FirstNames[Math.floor(Math.random() * FirstNames.length)]} ${LastNames[Math.floor(Math.random() * LastNames.length)]}`;
}

function generateEmail(name: string) {
  return `${name.replace(' ', '.').toLowerCase()}@trysnippyly.com`;
}

function generateUserData() {

  let user: any = window.sessionStorage.getItem('_snippyly_fake_user');

  if (user === null) {
    const name = generateName();
    /**
     * Snippyly Code Example
     * Here we define the user that we pass to Snippyly.
     * 
     * The group ID is particularly important as it
     * allows users in the same group to tag eachother.
     * 
     * Providing a contacts array does the same,
     * but effectively manually adds users to the user's contacts list.
     * 
     */
    user = {
      userId: generateUserId(),
      name,
      email: generateEmail(name),
      photoUrl: `https://i.pravatar.cc/150?u=${name}`,
      groupId: 'demo-group',
      contacts: [
        {
          userId: generateUserId(),
          name: 'Michael Scott',
          email: 'michael@trysnippyly.com',
          photoUrl: 'https://cdn.costumewall.com/wp-content/uploads/2018/09/prison-mike.webp'
        }
      ]
    };
    window.sessionStorage.setItem('_snippyly_fake_user', JSON.stringify(user));
  } else user = JSON.parse(user);

  return user;
}

export { generateUserData };