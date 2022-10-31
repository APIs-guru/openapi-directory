package shared



type Pagination struct {
    CurrentPage int32 `json:"current_page"`
    PerPage int32 `json:"per_page"`
    TotalEntries int32 `json:"total_entries"`
    TotalPages int32 `json:"total_pages"`
    
}

