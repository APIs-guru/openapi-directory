package shared

type ConversationsResponseError struct {
	Code    *string `json:"code"`
	Message *string `json:"message"`
}

type ConversationsResponsePagination struct {
	Limit      *int64 `json:"limit"`
	Offset     *int64 `json:"offset"`
	TotalCount *int64 `json:"totalCount"`
}

type ConversationsResponse struct {
	Data       []Conversation                   `json:"data"`
	Error      *ConversationsResponseError      `json:"error"`
	Pagination *ConversationsResponsePagination `json:"pagination"`
	Success    *bool                            `json:"success"`
}
