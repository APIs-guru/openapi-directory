package shared

type CalculateLoyaltyPointsResponse struct {
	Errors []Error `json:"errors,omitempty"`
	Points *int64  `json:"points,omitempty"`
}
