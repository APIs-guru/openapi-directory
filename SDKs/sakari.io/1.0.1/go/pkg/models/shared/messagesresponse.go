package shared



type MessagesResponseError struct {
    Code *string `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type MessagesResponsePagination struct {
    Limit *int64 `json:"limit,omitempty"`
    Offset *int64 `json:"offset,omitempty"`
    TotalCount *int64 `json:"totalCount,omitempty"`
    
}

type MessagesResponse struct {
    Data []Message `json:"data,omitempty"`
    Error *MessagesResponseError `json:"error,omitempty"`
    Pagination *MessagesResponsePagination `json:"pagination,omitempty"`
    Success *bool `json:"success,omitempty"`
    
}

