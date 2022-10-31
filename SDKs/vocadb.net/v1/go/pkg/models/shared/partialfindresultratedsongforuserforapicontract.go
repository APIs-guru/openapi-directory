package shared



type PartialFindResultRatedSongForUserForAPIContract struct {
    Items []RatedSongForUserForAPIContract `json:"items,omitempty"`
    Term *string `json:"term,omitempty"`
    TotalCount *int32 `json:"totalCount,omitempty"`
    
}

