package shared

type MessagesResponseError struct {
	Code    *string `json:"code"`
	Message *string `json:"message"`
}

type MessagesResponsePagination struct {
	Limit      *int64 `json:"limit"`
	Offset     *int64 `json:"offset"`
	TotalCount *int64 `json:"totalCount"`
}

type MessagesResponse struct {
	Data       []Message                   `json:"data"`
	Error      *MessagesResponseError      `json:"error"`
	Pagination *MessagesResponsePagination `json:"pagination"`
	Success    *bool                       `json:"success"`
}
