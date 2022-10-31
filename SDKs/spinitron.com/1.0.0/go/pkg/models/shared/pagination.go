package shared



type Pagination struct {
    CurrentPage *int64 `json:"currentPage,omitempty"`
    PageCount *int64 `json:"pageCount,omitempty"`
    PerPage *int64 `json:"perPage,omitempty"`
    TotalCount *int64 `json:"totalCount,omitempty"`
    
}

