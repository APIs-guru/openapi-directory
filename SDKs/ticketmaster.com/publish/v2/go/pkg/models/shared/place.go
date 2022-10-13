package shared

type Place struct {
	Address    *Address          `json:"address"`
	Area       *Area             `json:"area"`
	City       *City             `json:"city"`
	Country    *Country          `json:"country"`
	Location   *Location         `json:"location"`
	Names      map[string]string `json:"names"`
	PostalCode *string           `json:"postalCode"`
	State      *State            `json:"state"`
}
