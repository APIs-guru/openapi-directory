package shared

type OdataError struct {
	Code    *string       `json:"code"`
	Message *ErrorMessage `json:"message"`
}
