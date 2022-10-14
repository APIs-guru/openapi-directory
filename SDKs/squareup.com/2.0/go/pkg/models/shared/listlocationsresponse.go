package shared

type ListLocationsResponse struct {
	Errors    []Error    `json:"errors,omitempty"`
	Locations []Location `json:"locations,omitempty"`
}
