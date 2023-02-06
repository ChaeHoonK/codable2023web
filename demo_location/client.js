const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const crd = pos.coords;

    const box = document.querySelector('#box')
    const p = document.createElement('p')
    p.innerText = (`Your Current Location: (${crd.latitude}, ${crd.longitude})`)
    box.appendChild(p)
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  const button = document.querySelector('#btnGetLocation')

  function handleClick () {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  button.addEventListener('click',handleClick)