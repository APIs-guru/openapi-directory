package shared

type ExternalIDObject struct {
	Ean  *string `json:"ean,omitempty"`
	Isrc *string `json:"isrc,omitempty"`
	Upc  *string `json:"upc,omitempty"`
}
