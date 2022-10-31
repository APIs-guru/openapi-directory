package shared

type CalculateItineraryResult struct {
	ID     *string                           `json:"id,omitempty"`
	Totals []CalculateItineraryProgramResult `json:"totals,omitempty"`
}
