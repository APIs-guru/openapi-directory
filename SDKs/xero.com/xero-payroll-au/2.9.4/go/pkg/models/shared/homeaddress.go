package shared

type HomeAddress struct {
	AddressLine1 string     `json:"AddressLine1"`
	AddressLine2 *string    `json:"AddressLine2"`
	City         *string    `json:"City"`
	Country      *string    `json:"Country"`
	PostalCode   *string    `json:"PostalCode"`
	Region       *StateEnum `json:"Region"`
}
