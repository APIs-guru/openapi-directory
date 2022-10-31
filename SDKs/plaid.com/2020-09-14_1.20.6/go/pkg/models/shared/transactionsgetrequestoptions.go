package shared



type TransactionsGetRequestOptions struct {
    AccountIds []string `json:"account_ids,omitempty"`
    Count *int64 `json:"count,omitempty"`
    IncludeOriginalDescription *bool `json:"include_original_description,omitempty"`
    Offset *int64 `json:"offset,omitempty"`
    
}

