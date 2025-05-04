export async function fetchAPI(query, variables = {}) {
  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 }, // ISR (optional)
  });

  const json = await res.json();

  if (json.errors) {
    console.error('GraphQL Errors', json.errors);
    throw new Error('Failed to fetch GraphQL data.');
  }

  return json.data;
}
