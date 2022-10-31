package shared



type PartialFindResultSongForAPIContract struct {
    Items []SongForAPIContract `json:"items,omitempty"`
    Term *string `json:"term,omitempty"`
    TotalCount *int32 `json:"totalCount,omitempty"`
    
}

