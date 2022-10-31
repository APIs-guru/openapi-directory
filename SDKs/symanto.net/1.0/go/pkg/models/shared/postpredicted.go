package shared



type PostPredicted struct {
    ID *string `json:"id,omitempty"`
    Predictions []Prediction `json:"predictions"`
    
}

