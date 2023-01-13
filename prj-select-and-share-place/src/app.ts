import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

type GoogleGecodingResponse = {
  results: {
    geometry: {
      location: { lat: number, lng: number }
    }
  }[];
  status: 'OK' | 'ZERO_RESULTS'
}

function searchAddressHandler(e: Event) {
  e.preventDefault();
  const enteredAddress = addressInput.value
  console.log('clicked!!');

  const GOOGLE_API_KEY = 'xxxxx';
  // send this to Google API!
  axios.get<GoogleGecodingResponse>(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
      enteredAddress
    )}&key=${GOOGLE_API_KEY}`
  ).then(response => {
    if (response.data.status !== 'OK') {
      throw new Error('Could not fetch location!');
    }
    const coordinates = response.data.results[0].geometry.location;
  }).catch(err => {
    alert(err.message);
    console.log(err);
  });
}

form.addEventListener('submit', searchAddressHandler);
