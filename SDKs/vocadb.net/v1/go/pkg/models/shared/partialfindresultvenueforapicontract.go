package shared

type PartialFindResultVenueForAPIContract struct {
	Items      []VenueForAPIContract `json:"items"`
	Term       *string               `json:"term"`
	TotalCount *int32                `json:"totalCount"`
}
