const headerOptions = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
};

async function request(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

export function getUsers() {
  return request('/api/users');
}

export function removeUser(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  });
}

export function updateUser(id, user) {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    ...headerOptions,
    body: JSON.stringify(user),
  });
}

export function addUser(user) {
  return request('/api/users', {
    method: 'POST',
    ...headerOptions,
    body: JSON.stringify(user),
  });
}
