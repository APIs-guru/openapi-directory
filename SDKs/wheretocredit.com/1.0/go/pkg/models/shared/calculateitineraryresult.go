package shared

type CalculateItineraryResult struct {
	ID     *string                           `json:"id"`
	Totals []CalculateItineraryProgramResult `json:"totals"`
}
