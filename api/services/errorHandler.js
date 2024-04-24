class errorHandler extends Error {
    constructor(status, msg) {
        super();
        this.status = status;
        this.message = msg;
    }
    static alreadyExist(message) {
        return new errorHandler(409, message);
    }
    static wrongCredentials(message) {
        return new errorHandler(401, message);
    }
   
}
export default errorHandler;