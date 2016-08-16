// import { browserHistory } from 'react-router';

export function folderSuccess(folders) {
  return {
    type: 'FOLDER_SUCCESS',
    folders,
  };
}

export function folderFailure(message) {
  return {
    type: 'FOLDER_FAILURE',
    message,
  };
}

export function getAllFolders() {
  const token = localStorage.getItem('jwtToken');

  return (dispatch) => {
    return fetch('/api/folders/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
    })
    .then(res => res.json())
    .then(data => {
      dispatch(folderSuccess(data));
    })
    .catch(err => {
      dispatch(folderFailure(err));
    });
  };
}

export function createFolder(name) {
  const token = localStorage.getItem('jwtToken');

  return (dispatch) => {
    return fetch('/api/folders/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify({ name }),
    })
    .then(res => res.text())
    .then(data => {
      dispatch(getAllFolders());
      console.log(data); // Folder that was just created
    })
    .catch(err => console.log(err));
  };
}