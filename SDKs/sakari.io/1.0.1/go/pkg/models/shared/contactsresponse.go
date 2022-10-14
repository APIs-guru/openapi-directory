package shared

type ContactsResponseError struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type ContactsResponsePagination struct {
	Limit      *int64 `json:"limit,omitempty"`
	Offset     *int64 `json:"offset,omitempty"`
	TotalCount *int64 `json:"totalCount,omitempty"`
}

type ContactsResponse struct {
	Data       []Contact                   `json:"data,omitempty"`
	Error      *ContactsResponseError      `json:"error,omitempty"`
	Pagination *ContactsResponsePagination `json:"pagination,omitempty"`
	Success    *bool                       `json:"success,omitempty"`
}
