package shared

type ListMerchantsResponse struct {
	Cursor   *int64     `json:"cursor,omitempty"`
	Errors   []Error    `json:"errors,omitempty"`
	Merchant []Merchant `json:"merchant,omitempty"`
}
