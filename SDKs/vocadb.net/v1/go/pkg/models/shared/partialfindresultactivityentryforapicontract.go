package shared



type PartialFindResultActivityEntryForAPIContract struct {
    Items []ActivityEntryForAPIContract `json:"items,omitempty"`
    Term *string `json:"term,omitempty"`
    TotalCount *int32 `json:"totalCount,omitempty"`
    
}

