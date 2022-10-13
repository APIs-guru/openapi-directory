package shared

type ContactsResponseError struct {
	Code    *string `json:"code"`
	Message *string `json:"message"`
}

type ContactsResponsePagination struct {
	Limit      *int64 `json:"limit"`
	Offset     *int64 `json:"offset"`
	TotalCount *int64 `json:"totalCount"`
}

type ContactsResponse struct {
	Data       []Contact                   `json:"data"`
	Error      *ContactsResponseError      `json:"error"`
	Pagination *ContactsResponsePagination `json:"pagination"`
	Success    *bool                       `json:"success"`
}
