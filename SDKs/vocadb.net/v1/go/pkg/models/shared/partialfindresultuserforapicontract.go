package shared



type PartialFindResultUserForAPIContract struct {
    Items []UserForAPIContract `json:"items,omitempty"`
    Term *string `json:"term,omitempty"`
    TotalCount *int32 `json:"totalCount,omitempty"`
    
}

