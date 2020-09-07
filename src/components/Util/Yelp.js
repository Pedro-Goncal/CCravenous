const apiKey = 'F9pZhkFHdRfnQk31tdjPuj691wF7nkukviY_ejD78TnOpkaArC7RXYOWfrFThywoGEnep5jrhSWGk7gbkrxChaBsaG3PPjPHz7DvHEWgvdJFufecsGPwtF4imPQFX3Yx';

const Yelp = (term, location, sortBy) => {
   try {
      const results = fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=${term}&location=${location}&sort_by=${sortBy}`,
      {
       headers: {
         Authorization: `Bearer ${apiKey}`,
      },
      }).then(response => {
         return response.json();
      }).then(jsonResponse => {
         if(jsonResponse.businesses){
            return jsonResponse.businesses.map(business => {
                return {
                  id: business.id,
                  imageSrc: business.image_url,
                  name: business.name,
                  address: business.location.address1,
                  city: business.location.city,
                  state: business.location.state,
                  zipCode: business.location.zip_code,
                  category: business.categories[0].title,
                  rating: business.ratings,
                  reviewCount: business.review_counts,
                  url: business.url, 
                  googleMaps: {
                  latitude: business.coordinates.latitude,
                  longitude: business.coordinates.longitude,
                  }
               }; 
            })
         }
      })
      return results;
   } catch (error) {
      console.log(error);
   }
}; 

export default Yelp;











/*Add a fetch() polyfill to support older browsers.

Within the Ravenous directory in your terminal, run npm install whatwg-fetch --save to install the 
whatwg-fetch polyfill and add it to your package.json file. 

*/


/*
const apiKey = 'F9pZhkFHdRfnQk31tdjPuj691wF7nkukviY_ejD78TnOpkaArC7RXYOWfrFThywoGEnep5jrhSWGk7gbkrxChaBsaG3PPjPHz7DvHEWgvdJFufecsGPwtF4imPQFX3Yx';

const Yelp = {
   search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=${term}&location=${location}&sort_by=${sortBy}`,{
         headers: {
            Authorization: `Bearer ${apiKey}`,
         },
      }).then(response => {
         return response.json();
      }).then(jsonResponse => {
         if(jsonResponse.businesses){
            return jsonResponse.businesses.map(business => {
                return {
                  id: business.id,
                  imageSrc: business.image_url,
                  name: business.name,
                  address: business.location.address1,
                  city: business.location.city,
                  state: business.location.state,
                  zipCode: business.location.zip_code,
                  category: business.categories[0].title,
                  rating: business.ratings,
                  reviewCount: business.review_counts,
                  url: business.url, 
                  googleMaps: {
                  latitude: business.coordinates.latitude,
                  longitude: business.coordinates.longitude,
                  }
               }; 
            })
         }
      })
   } 
}

export default Yelp;
*/