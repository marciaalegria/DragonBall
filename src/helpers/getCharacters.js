const obtenerPersonajes= async ()=>{
    const data = await fetch('https://dragon-ball-super-api.herokuapp.com/api/characters');
    const resp = await data.json();
    return(resp);
  }
  export {obtenerPersonajes};