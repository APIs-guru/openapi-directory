package shared



type TemplatesResponseError struct {
    Code *string `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type TemplatesResponsePagination struct {
    Limit *int64 `json:"limit,omitempty"`
    Offset *int64 `json:"offset,omitempty"`
    TotalCount *int64 `json:"totalCount,omitempty"`
    
}

type TemplatesResponse struct {
    Data []Template `json:"data,omitempty"`
    Error *TemplatesResponseError `json:"error,omitempty"`
    Pagination *TemplatesResponsePagination `json:"pagination,omitempty"`
    Success *bool `json:"success,omitempty"`
    
}

