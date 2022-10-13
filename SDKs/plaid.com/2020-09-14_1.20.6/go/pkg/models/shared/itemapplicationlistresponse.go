package shared

type ItemApplicationListResponse struct {
	Applications []ConnectedApplication `json:"applications"`
	RequestID    *string                `json:"request_id"`
}
