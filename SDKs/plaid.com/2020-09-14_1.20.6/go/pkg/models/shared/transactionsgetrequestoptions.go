package shared

type TransactionsGetRequestOptions struct {
	AccountIds                 []string `json:"account_ids"`
	Count                      *int64   `json:"count"`
	IncludeOriginalDescription *bool    `json:"include_original_description"`
	Offset                     *int64   `json:"offset"`
}
