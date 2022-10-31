package shared



type GetRelatedSchema struct {
    Filter *string `json:"filter,omitempty"`
    IncludeIds []int64 `json:"include_ids,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    
}

