package shared

// GenericError
// A general error json response for things like Authorization Errors or Bad Requests (ex. invalid parameter values).
type GenericError struct {
	Message string `json:"message"`
}
