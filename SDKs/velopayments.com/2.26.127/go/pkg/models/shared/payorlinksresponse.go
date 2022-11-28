package shared

// PayorLinksResponse
// List Payor Links Response Object
type PayorLinksResponse struct {
	Links  []interface{} `json:"links,omitempty"`
	Payors []interface{} `json:"payors,omitempty"`
}
