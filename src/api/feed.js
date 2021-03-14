const getPhotos = async(callback) =>{
    const photosHttp = await fetch("http://10.0.2.2:3030/feed");
    const photosJson = await photosHttp.json();
    callback(photosJson);
  }

  export default getPhotos;