package shared

type TemplatesResponseError struct {
	Code    *string `json:"code"`
	Message *string `json:"message"`
}

type TemplatesResponsePagination struct {
	Limit      *int64 `json:"limit"`
	Offset     *int64 `json:"offset"`
	TotalCount *int64 `json:"totalCount"`
}

type TemplatesResponse struct {
	Data       []Template                   `json:"data"`
	Error      *TemplatesResponseError      `json:"error"`
	Pagination *TemplatesResponsePagination `json:"pagination"`
	Success    *bool                        `json:"success"`
}
