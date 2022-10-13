package shared

type SearchAvailabilityResponse struct {
	Availabilities []Availability `json:"availabilities"`
	Errors         []Error        `json:"errors"`
}
