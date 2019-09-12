const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/uncompletedchorez/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/uncompletedchorez`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/uncompletedchorez/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newUnCompletedChorez) {
    return fetch(`${remoteURL}/uncompletedchorez`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUnCompletedChorez)
    }).then(data => data.json())
  },
  update(editedUncompletedChorez) {
    return fetch(`${remoteURL}/uncompletedchorez/${editedUncompletedChorez.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedUncompletedChorez)
    }).then(data => data.json());
  }
}