export interface IBlog {
  id?: number;
  title: string;
  content: string;
  authorid?: number;
}

export interface IAuthor {
  id?: number;
  name: string;
  email: string;
}

export interface ITag {
  id?: number;
  name: string;
}
