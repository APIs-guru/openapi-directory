package shared

type DestinationModel struct {
	Country *string `json:"country"`
	Os      *string `json:"os"`
	URL     string  `json:"url"`
}
