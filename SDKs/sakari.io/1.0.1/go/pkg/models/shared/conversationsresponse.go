package shared

type ConversationsResponseError struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type ConversationsResponsePagination struct {
	Limit      *int64 `json:"limit,omitempty"`
	Offset     *int64 `json:"offset,omitempty"`
	TotalCount *int64 `json:"totalCount,omitempty"`
}

type ConversationsResponse struct {
	Data       []Conversation                   `json:"data,omitempty"`
	Error      *ConversationsResponseError      `json:"error,omitempty"`
	Pagination *ConversationsResponsePagination `json:"pagination,omitempty"`
	Success    *bool                            `json:"success,omitempty"`
}
