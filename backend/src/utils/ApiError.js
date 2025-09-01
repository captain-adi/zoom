class ApiError extends Error{
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.success = false;
    this.statusCode = statusCode;
  }
}
export default ApiError;
