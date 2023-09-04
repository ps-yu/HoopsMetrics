import React from 'react';

const url = 'https://api-nba-v1.p.rapidapi.com/seasons';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5546e3f26cmshf8ce7c998ee0584p1cc914jsn551e0f6ebb7a',
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