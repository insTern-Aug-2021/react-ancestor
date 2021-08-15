export enum ActionTypes {
  SEARCH,
}

export abstract class AppAction {
  public readonly type: ActionTypes;
  constructor(type: ActionTypes) {
    this.type = type;
  }
}

export class SearchAction extends AppAction {
  public readonly author: string[];
  public readonly title: string;

  constructor(author: string[], title: string) {
    super(ActionTypes.SEARCH);
    this.author = author;
    this.title = title;
  }
}
