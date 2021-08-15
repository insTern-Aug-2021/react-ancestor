import { CatPost } from "./Cats";

export interface AppState {
  allImages: CatPost[];
  matchedImage: CatPost[];
}
