

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
  return `${name.replace(' ', '.').toLowerCase()}@dundermifflin.com`;
}

function generateUserData() {

  let user: any = window.sessionStorage.getItem('_snippyly_fake_user');

  if (user === null) {
    const name = generateName();
    /**
     * Snippyly Code Example
     * Here we define the user that we pass to Snippyly.
     */
    user = {
      userId: generateUserId(),
      name,
      email: generateEmail(name),
      photoUrl: `https://i.pravatar.cc/150?u=${name}`,
      contacts: [
        {
          userId: generateUserId(),
          name: 'Michael Scott',
          email: 'michael@dundermifflin.com',
          photoUrl: 'https://cdn.costumewall.com/wp-content/uploads/2018/09/prison-mike.webp'
        }
      ]
    };
    window.sessionStorage.setItem('_snippyly_fake_user', JSON.stringify(user));
  } else user = JSON.parse(user);

  return user;
}

export { generateUserData };