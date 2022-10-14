package shared

type ErrorObject struct {
	Message *string `json:"message,omitempty"`
	Status  *int32  `json:"status,omitempty"`
}
