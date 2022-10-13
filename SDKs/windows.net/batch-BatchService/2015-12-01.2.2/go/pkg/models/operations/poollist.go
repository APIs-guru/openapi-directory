package operations

type PoolListQueryParams struct {
	DollarExpand *string `queryParam:"style=form,explode=true,name=$expand"`
	DollarFilter *string `queryParam:"style=form,explode=true,name=$filter"`
	DollarSelect *string `queryParam:"style=form,explode=true,name=$select"`
	APIVersion   string  `queryParam:"style=form,explode=true,name=api-version"`
	Maxresults   *int32  `queryParam:"style=form,explode=true,name=maxresults"`
	Timeout      *int32  `queryParam:"style=form,explode=true,name=timeout"`
}

type PoolListHeaders struct {
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
}

type PoolListRequest struct {
	QueryParams PoolListQueryParams
	Headers     PoolListHeaders
}

type PoolListResponse struct {
	BatchError          *interface{}
	CloudPoolListResult *interface{}
	ContentType         string
	Headers             map[string][]string
	StatusCode          int64
}
