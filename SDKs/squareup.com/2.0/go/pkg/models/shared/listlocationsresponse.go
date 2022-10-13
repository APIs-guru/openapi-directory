package shared

type ListLocationsResponse struct {
	Errors    []Error    `json:"errors"`
	Locations []Location `json:"locations"`
}
