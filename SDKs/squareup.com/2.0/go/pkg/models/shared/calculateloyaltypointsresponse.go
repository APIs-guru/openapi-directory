package shared

type CalculateLoyaltyPointsResponse struct {
	Errors []Error `json:"errors"`
	Points *int64  `json:"points"`
}
