import { fetchAPI } from './fetch-api';

export async function getMenu() {
  const data = await fetchAPI(`
    {
      menus {
        nodes {
          slug
          menuItems {
            nodes {
              label
              uri
            }
          }
        }
      }
    }
  `);
  return data?.menus?.nodes?.[0]?.menuItems?.nodes || [];
}

export async function getPageContent(slug) {
  const data = await fetchAPI(`
    query PageBySlug($slug: ID!) {
      page(id: $slug, idType: URI) {
        title
        content
      }
    }
  `, { slug });
  return data?.page;
}

export async function getAllPosts() {
  const data = await fetchAPI(`
    {
      posts {
        nodes {
          slug
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `);
  return data.posts.nodes;
}

export async function getPostBySlug(slug) {
  const data = await fetchAPI(`
    query PostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        content
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `, { slug });
  return data.post;
}
