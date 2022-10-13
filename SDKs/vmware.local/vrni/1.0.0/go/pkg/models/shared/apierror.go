package shared

type APIError struct {
	Code    *int32        `json:"code"`
	Details []ErrorDetail `json:"details"`
	Message *string       `json:"message"`
}
