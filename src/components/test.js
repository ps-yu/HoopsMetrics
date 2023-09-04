import React from 'react';
import key from '../keys';

const url = 'https://api-nba-v1.p.rapidapi.com/players?team=1&season=2021';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': key(),
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
async function data(){
  const response = await fetch(url, options);
	const result = await response.text();
  console.log(result)
}
data();

const data1 = () => {
  return (
    <div>
      data
      {data}
    </div>
  )
}
export default  data1;