package shared

type ErrorObject struct {
	Message *string `json:"message"`
	Status  *int32  `json:"status"`
}
