import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    private blogs: Blog[] = [
        { id: 1, title: 'First Blog Post', content: 'This is the first blog post.' },
        { id: 2, title: 'Second Blog Post', content: 'This is the second blog post.' },
        { id: 3, title: 'Third Blog Post', content: 'This is the third blog post.' }
    ];

    constructor() { }

    getBlogList(): Blog[] {
        return this.blogs;
    }

    getBlogById(id: number): Blog | undefined {
        return this.blogs.find(blog => blog.id === id);
    }
}
