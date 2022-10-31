package shared



type TenderCardDetails struct {
    Card *Card `json:"card,omitempty"`
    EntryMethod *string `json:"entry_method,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

