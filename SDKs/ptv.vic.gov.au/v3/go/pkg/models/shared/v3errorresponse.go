package shared

type V3ErrorResponse struct {
	Message *string   `json:"message"`
	Status  *V3Status `json:"status"`
}
