export interface Course{
    _id: string, 
    title: string,
    description: string,
    author: string,
    tag: string
    content: string,
    creator: string
}

export type NewCourse = Omit<Course, "_id" |  "creator">
export type UpdateCourse = NewCourse


export interface CourseState {
    courses: Array<Course>;
}