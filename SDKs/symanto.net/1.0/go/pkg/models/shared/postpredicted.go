package shared

type PostPredicted struct {
	ID          *string      `json:"id"`
	Predictions []Prediction `json:"predictions"`
}
