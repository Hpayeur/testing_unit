import { sendDataRequest } from "../util/http";
import { validateNotEmpty } from "../util/validation";

export function savePost(postData) {
  postData.created = new Date();
  return sendDataRequest(postData);
}

export function extractPostData(form) {
  const title = form.get("title");
  const content = form.get("content");

  validateNotEmpty(title, "This title must be Provided");
  validateNotEmpty(content, "Wheres the Content?");
  return { title, content };
}
