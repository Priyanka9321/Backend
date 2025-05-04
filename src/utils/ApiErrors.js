class ApiError extends Error {
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        statcks=""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if (statcks) {
            this.stack = statcks
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}