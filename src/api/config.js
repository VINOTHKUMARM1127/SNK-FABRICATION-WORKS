export const SANITY_PROJECT_ID = 'nnh0dbn0';
export const SANITY_DATASET = 'production';
export const SANITY_API_VERSION = 'v2022-03-07';

export const fetchSanityProjects = async (limit = null) => {
  const limitClause = limit ? `[0...${limit}]` : '';
  const query = encodeURIComponent(`*[_type == "project"]${limitClause} | order(_createdAt desc) {
    _id,
    title,
    category,
    "img": image.asset->url + "?w=800&auto=format&fit=max&q=80",
    "desc": description
  }`);
  
  const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${query}`;
  
  try {
    const res = await fetch(url);
    const json = await res.json();
    if (json.result) {
      return json.result.map(p => ({
        id: p._id,
        title: p.title,
        category: p.category,
        img: p.img,
        desc: p.desc
      }));
    }
    return [];
  } catch (err) {
    console.error("Error fetching from Sanity:", err);
    return [];
  }
};
