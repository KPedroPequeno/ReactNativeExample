export interface IKResult<T> {
    succeeded: boolean,
    errors: IKResultError[],
    result: T
}


export interface IKResultError {
    code: String,
    description: String
}