import "isomorphic-fetch"

export default () =>
 fetch('https://demo-city-v4-itg.smartappscenter.com/contentdelivery/graphql', {
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

  /*
export default async () => {
  const dataJson = await fetch('https://demo-city-v4-itg.smartappscenter.com/contentdelivery/graphql', {
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
  .then(r => r.json())
  .then(data => {
    //dataJson = data.data.pois.edges;
    return data.data.pois.edges;
    //console.log('data returned:', data)
  });
  
  return dataJson;
}
*/