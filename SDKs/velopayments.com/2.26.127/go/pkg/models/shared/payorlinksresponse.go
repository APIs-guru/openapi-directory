package shared

type PayorLinksResponse struct {
	Links  []interface{} `json:"links,omitempty"`
	Payors []interface{} `json:"payors,omitempty"`
}
