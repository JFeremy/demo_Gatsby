import "isomorphic-fetch"

export default async () => 
  await fetch('https://demo-city-v4-itg.smartappscenter.com/contentdelivery/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(
        {
            query: `{
                pois {
                  edges {
                      node { 
                        id
                      title
                      categories {
                        edges {
                          node {
                            title
                          }
                        }
                      }
                      description        
                          location {
                        address
                        zipCode
                        city
                      }
                      websites
                      phones
                    }
                  }
                }
              }`
          }
      )
    })
    .then(
      fetchResult => fetchResult.json(),
      fetchError => {
        console.log("Une erreur a eu lieu pendant la requête", fetchError);
        return null;
      },
    )
    .then(
      jsonResult => jsonResult.data.pois.edges,
      parseError => {
        console.log("Une erreur a eu lieu pendant le parsing", parseError);
        return null;
      },
    );