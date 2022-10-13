package shared

type SearchCustomersRequest struct {
	Cursor *string        `json:"cursor"`
	Limit  *int64         `json:"limit"`
	Query  *CustomerQuery `json:"query"`
}
