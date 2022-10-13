package shared

type PredictionErrorResponse struct {
	Message *string `json:"message"`
	Object  *string `json:"object"`
}
