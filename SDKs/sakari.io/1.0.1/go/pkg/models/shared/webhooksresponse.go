package shared

type WebhooksResponseError struct {
	Code    *string `json:"code"`
	Message *string `json:"message"`
}

type WebhooksResponsePagination struct {
	Limit      *int64 `json:"limit"`
	Offset     *int64 `json:"offset"`
	TotalCount *int64 `json:"totalCount"`
}

type WebhooksResponse struct {
	Data       []Webhook                   `json:"data"`
	Error      *WebhooksResponseError      `json:"error"`
	Pagination *WebhooksResponsePagination `json:"pagination"`
	Success    *bool                       `json:"success"`
}
