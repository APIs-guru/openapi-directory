package shared

type SearchAvailabilityResponse struct {
	Availabilities []Availability `json:"availabilities,omitempty"`
	Errors         []Error        `json:"errors,omitempty"`
}
