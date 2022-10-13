package shared

type PayorLinksResponse struct {
	Links  []interface{} `json:"links"`
	Payors []interface{} `json:"payors"`
}
