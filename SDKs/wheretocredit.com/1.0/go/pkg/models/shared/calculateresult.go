package shared

type CalculateResult struct {
	ErrorMessage *string                   `json:"errorMessage"`
	Success      *bool                     `json:"success"`
	Value        *CalculateItineraryResult `json:"value"`
}
