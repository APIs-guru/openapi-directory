package shared

// OdataError
// Active Directory OData error information.
type OdataError struct {
	Code    *string       `json:"code,omitempty"`
	Message *ErrorMessage `json:"message,omitempty"`
}
