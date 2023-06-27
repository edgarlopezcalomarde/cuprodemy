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
    _id: string, 
    title: string,
    description: string,
    author: string,
    tag: string
    content: string,
}

export type NewCourse = Omit<Course, "_id">
export type UpdateCourse = NewCourse


export interface CourseState {
    courses: Array<Course>;
}