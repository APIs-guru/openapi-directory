package shared



type PartyMembersServiceSearchResult struct {
    Items []PartyItem `json:"items,omitempty"`
    Links []Link `json:"links,omitempty"`
    ResultContext *string `json:"resultContext,omitempty"`
    Skip *int32 `json:"skip,omitempty"`
    Take *int32 `json:"take,omitempty"`
    TotalResults *int32 `json:"totalResults,omitempty"`
    
}

