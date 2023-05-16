import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blog: Blog | undefined;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    const blogId = Number(this.route.snapshot.params['id']);
    this.blog = this.blogService.getBlogById(blogId);
  }
}
