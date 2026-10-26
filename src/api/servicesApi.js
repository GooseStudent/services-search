const BASE_URL = 'http://localhost:7070/api/services';

async function request(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}

export function fetchServices() {
  return request(BASE_URL);
}

export function fetchServiceDetails(id) {
  return request(`${BASE_URL}/${id}`);
}