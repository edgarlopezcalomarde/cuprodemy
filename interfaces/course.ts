// export interface Course{
//     id: string,
//     title: string,
//     description: string,
//     author: string,
//     duration: string,
//     content: string,
//     tags: Array<string>
// }

export interface Course{
    id: string,
    title: string,
    description: string,
    author: string,
    tag: string
    content: string,
}

export type NewCourse = Omit<Course, "id">