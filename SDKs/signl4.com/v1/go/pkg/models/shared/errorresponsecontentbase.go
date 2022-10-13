package shared

type ErrorResponseContentBase struct {
	Details *string `json:"details"`
	Message *string `json:"message"`
}
