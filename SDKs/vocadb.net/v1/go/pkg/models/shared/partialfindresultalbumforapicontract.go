package shared



type PartialFindResultAlbumForAPIContract struct {
    Items []AlbumForAPIContract `json:"items,omitempty"`
    Term *string `json:"term,omitempty"`
    TotalCount *int32 `json:"totalCount,omitempty"`
    
}

