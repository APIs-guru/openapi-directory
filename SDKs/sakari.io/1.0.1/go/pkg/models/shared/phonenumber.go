package shared

type PhoneNumber struct {
	Active  *bool   `json:"active,omitempty"`
	Country *string `json:"country,omitempty"`
	Number  *string `json:"number,omitempty"`
}
