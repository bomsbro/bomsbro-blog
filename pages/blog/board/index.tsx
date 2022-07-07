import BlogPagesLayout from "@bomsbro-blog-core/templates/BlogPagesLayout";
import BlogHomeView from "@bomsbro-blog-home/views/BlogHomeView";
import { NextPage } from "next";
import React from "react";
import BlogBoardView from "src/subapps/bomsbro-blog-board/views/BlogBoardView";

const BlogBoardPage: NextPage = () => {
  return (
    <BlogPagesLayout>
      <BlogBoardView />
    </BlogPagesLayout>
  );
};

export default BlogBoardPage;
