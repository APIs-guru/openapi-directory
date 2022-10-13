package shared

type PhoneNumber struct {
	Active  *bool   `json:"active"`
	Country *string `json:"country"`
	Number  *string `json:"number"`
}
