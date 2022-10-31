package shared



type Pagination struct {
    ItemCount *int64 `json:"itemCount,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageCount *int64 `json:"pageCount,omitempty"`
    PageSize *int64 `json:"pageSize,omitempty"`
    
}

