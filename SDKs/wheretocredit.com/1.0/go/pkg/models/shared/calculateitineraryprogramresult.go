package shared

type CalculateItineraryProgramResult struct {
	Airlines     []string `json:"airlines"`
	ID           *string  `json:"id"`
	Name         *string  `json:"name"`
	RevenueBased *bool    `json:"revenueBased"`
	Unpublished  *bool    `json:"unpublished"`
	Value        *int32   `json:"value"`
}
