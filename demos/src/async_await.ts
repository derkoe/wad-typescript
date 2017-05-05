
function loadUserName(userId) {
  const url = `https://user-api/user/${userId}`;
  return fetch(url)
    .then(response => response.json())
    .then(user => user.name);
}

async function loadUserName2(userId: string) {
  const url = `https://user-api/user/${userId}`;
  const response = await fetch(url);
  const user = await response.json();
  return user.name;
}
