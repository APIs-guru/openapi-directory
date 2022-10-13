package shared

type ListMerchantsResponse struct {
	Cursor   *int64     `json:"cursor"`
	Errors   []Error    `json:"errors"`
	Merchant []Merchant `json:"merchant"`
}
