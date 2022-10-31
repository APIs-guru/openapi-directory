package shared

type CampaignsResponseError struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type CampaignsResponsePagination struct {
	Limit      *int64 `json:"limit,omitempty"`
	Offset     *int64 `json:"offset,omitempty"`
	TotalCount *int64 `json:"totalCount,omitempty"`
}

type CampaignsResponse struct {
	Data       []Campaign                   `json:"data,omitempty"`
	Error      *CampaignsResponseError      `json:"error,omitempty"`
	Pagination *CampaignsResponsePagination `json:"pagination,omitempty"`
	Success    *bool                        `json:"success,omitempty"`
}
