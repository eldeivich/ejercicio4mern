/**
 * Basic JSON response for Controllers
 */
export type BasicResponse = {
    message: string
}

/**
 * Error JSON response for Controllers
 */
export type ErrorResponse = {
    error: string,
    message: string
}

/**
 * Goodbye JSON response for COntrollers
 */
export type GoodByeResponse = {
    message: string,
    date: Date
}