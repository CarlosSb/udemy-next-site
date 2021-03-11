import fs from "fs";
import path from "path";

export function getPostList() {
  try {
    const postsDir = path.join(process.cwd(), "src/pages/post");

    return fs
      .readdirSync(postsDir)
      .map((filename) => filename.substring(0, filename.indexOf(".")));
  } catch {
    console.warn("the ae no posts");
    return [];
  }
}
