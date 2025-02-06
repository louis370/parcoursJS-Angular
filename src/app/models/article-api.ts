export interface ArticleApi {
    id:number
    title:string
    description:string
    price:number
    category:string
    image:string
    rating:Rating
}


type Rating = {
    rate: number,
    count: number
}