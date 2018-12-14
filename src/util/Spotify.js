let accessToken = undefined;
const clientID = '8f92137b75474197949f434c6c1b2979';
const redirectURI = 'http://localhost:3000/';

const Spotify = {
  getAccessToken() {

    if(accessToken) {
      return accessToken;
    }

    const tokenString = window.location.href.match(/access_token=([^&]*)/);
    const expiresInString =  window.location.href.match(/expires_in=([^&]*)/);
    if (tokenString && expiresInString) {
      accessToken = tokenString[1];
      const expireTime = Number(expiresInString[1]);
      window.setTimeout(() => accessToken = '', expireTime * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    }
  },

  search(term) {
    const token = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  ).then(response => {
    return response.json();
  }).then(jsonResponse => {
    if (jsonResponse.tracks) {
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      })
        );
    } else {
      return [];
     }
   })
 },

  savePlaylist(playlistName, trackURIs) {
    if (!playlistName && !trackURIs) {
      return;
    }
    const token = accessToken;
    const headers = {Authorization: `Bearer ${token}`};
    let userID = undefined;

    return fetch(`https://api.spotify.com/v1/me`, {headers: headers}
    ).then(response => {
      return response.json();
    }).then(jsonResponse => {
      userID = jsonResponse.id;
      console.log('userID: ' + userID);
    return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/`, {
      headers: headers,
      method: 'POST',
      body: JSON.stringify({name: playlistName})
    })}).then(response => {
      return response.json();
    }).then(jsonResponse => {
      const playlistID = jsonResponse.id;
      fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({uris: trackURIs})
      })
    });
  }

};



export default Spotify;
