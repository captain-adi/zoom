class ErrorHandler extends Error() {
  cunstroctor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}
export default ErrorHandler;
