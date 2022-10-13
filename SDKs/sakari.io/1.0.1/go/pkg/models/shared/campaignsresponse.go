package shared

type CampaignsResponseError struct {
	Code    *string `json:"code"`
	Message *string `json:"message"`
}

type CampaignsResponsePagination struct {
	Limit      *int64 `json:"limit"`
	Offset     *int64 `json:"offset"`
	TotalCount *int64 `json:"totalCount"`
}

type CampaignsResponse struct {
	Data       []Campaign                   `json:"data"`
	Error      *CampaignsResponseError      `json:"error"`
	Pagination *CampaignsResponsePagination `json:"pagination"`
	Success    *bool                        `json:"success"`
}
