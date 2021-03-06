
export default function searchSuccess(files) {
  return {
    type: 'SEARCH_SUCCESS',
    files,
  };
}

export function searchFailure() {
  return {
    type: 'SEARCH_FAILURE',
  };
}

export function searchPending() {
  return {
    type: 'SEARCHING',
  };
}

export function globalSearch(searchType, searchInput) {
  const token = localStorage.getItem('jwtToken');
  return (dispatch) => {
    dispatch(searchPending());
    return fetch(`/api/${searchType}?q=${searchInput}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
    })
    .then(res => res.json())
    .then(files => dispatch(searchSuccess(files)))
    .catch(err => dispatch(searchFailure(err)));
  };
}
