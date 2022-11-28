package shared

// TransactionsGetRequestOptions
// An optional object to be used with the request. If specified, `options` must not be `null`.
type TransactionsGetRequestOptions struct {
	AccountIds                 []string `json:"account_ids,omitempty"`
	Count                      *int64   `json:"count,omitempty"`
	IncludeOriginalDescription *bool    `json:"include_original_description,omitempty"`
	Offset                     *int64   `json:"offset,omitempty"`
}
