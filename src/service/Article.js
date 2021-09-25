
import axios from "axios";

export class Article  {
    
  static async getArticles() {
    return 
    await axios.get("http://127.0.0.1:5000/news/api/v1/articles")
    .then ( response => response.data.articles)
  }

}
