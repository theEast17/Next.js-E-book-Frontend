export interface Book{
    _id:string,
    title:string,
    genre:string,
    coverImage:string,
    file:string,
    auhtor:Author
}

export type Author={
    name:string
}