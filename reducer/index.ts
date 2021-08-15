import { ActionTypes, AppAction, SearchAction } from "../types/AppAction";
import { AppState } from "../types/AppState";

export const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionTypes.SEARCH:
      const { allImages } = state;
      const { author: exactAuthorName, title: likelyTitle } =
        action as SearchAction;
      const titleRegex = new RegExp(likelyTitle);
      console.log("Hi", allImages, exactAuthorName, likelyTitle);

      return {
        ...state,
        matchedImage: allImages.filter(
          ({ author, title }) =>
            (exactAuthorName.length == 0 || exactAuthorName.includes(author)) &&
            titleRegex.test(title)
        ),
      };
  }
};
