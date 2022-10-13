package shared

type ExternalIDObject struct {
	Ean  *string `json:"ean"`
	Isrc *string `json:"isrc"`
	Upc  *string `json:"upc"`
}
