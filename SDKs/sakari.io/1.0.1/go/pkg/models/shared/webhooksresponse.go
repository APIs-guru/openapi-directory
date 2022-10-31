package shared



type WebhooksResponseError struct {
    Code *string `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type WebhooksResponsePagination struct {
    Limit *int64 `json:"limit,omitempty"`
    Offset *int64 `json:"offset,omitempty"`
    TotalCount *int64 `json:"totalCount,omitempty"`
    
}

type WebhooksResponse struct {
    Data []Webhook `json:"data,omitempty"`
    Error *WebhooksResponseError `json:"error,omitempty"`
    Pagination *WebhooksResponsePagination `json:"pagination,omitempty"`
    Success *bool `json:"success,omitempty"`
    
}

