package shared

type ErrorResponse struct {
	Errors []ErrorObject `json:"errors"`
}
