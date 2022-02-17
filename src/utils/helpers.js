export function generateSlug(string) {
    return string
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

export function generateCategoryData(categories) {
    let categoryData = [];
    categories.forEach((category) => {
        categoryData.push({
            name: category,
            slug: `${generateSlug(category)}`,
        });
    });
    return categoryData;
}

export function generateAuthorData(authors) {
    let authorData = [];
    authors.forEach((author) => {
        authorData.push({
            name: author,
            slug: `${generateSlug(author)}`,
        });
    });
    return authorData;
}