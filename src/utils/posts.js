async function processEntry([filename, load]) {
    const content = await load();
  
    // Import.meta.glob returns relative filenames, need to normalize it for a URL to the built page
    const url = filename
      .replace('../pages', '') // Remove the src/pages portion of the filepath
      .replace('.md', ''); // Remove the file extension
  
    // Pull out the markdown file's frontmatter
    const { astro, ...frontmatter } = content.frontmatter;
  
    return {
      ...frontmatter,
      url,
    };
  }
  
  let _posts = undefined;
  async function fetchPosts() {
    const postFiles = import.meta.glob('../pages/blog/*.md');
  
    const posts = await Promise.all(
      Object.entries(postFiles) // Gets a list of fieldnames and async load functions
        .map(processEntry) // Loads the post and returns a Link
    );
  
    return posts;
  }
  
  export async function getPosts() {
    if (!_posts) {
      _posts = fetchPosts();
    }
  
    return _posts;
  }
  