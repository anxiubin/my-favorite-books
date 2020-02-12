const getToken = function() {
    return localStorage.getItem('token');
}
  
const getUserByToken = async function(token) {
  try {
    const res = await axios.get('https://api.marktube.tv/v1/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log('getUserByToken error', error);
    return null;
  }
}

const getBook = async function(bookId) {
  const token = getToken();
  if (token === null) {
    location.href = '/login';
    return null;
  }
  try {
    const res = await axios.get(`https://api.marktube.tv/v1/book/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log('getBook error', error);
    return null;
  }
}

const deleteBook = async function(bookId) {
  const token = getToken();
  if (token === null) {
    location.assign('/login');
    return;
  }
  await axios.delete(`https://api.marktube.tv/v1/book/${bookId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return;
}

export { getToken, getUserByToken, getBook, deleteBook }