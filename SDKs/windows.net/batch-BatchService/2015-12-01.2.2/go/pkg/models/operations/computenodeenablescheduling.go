package operations

type ComputeNodeEnableSchedulingPathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
	PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
}

type ComputeNodeEnableSchedulingQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type ComputeNodeEnableSchedulingHeaders struct {
	ClientRequestID       *string `header:"style=simple,explode=false,name=client-request-id"`
	OcpDate               *string `header:"style=simple,explode=false,name=ocp-date"`
	ReturnClientRequestID *bool   `header:"style=simple,explode=false,name=return-client-request-id"`
}

type ComputeNodeEnableSchedulingRequest struct {
	PathParams  ComputeNodeEnableSchedulingPathParams
	QueryParams ComputeNodeEnableSchedulingQueryParams
	Headers     ComputeNodeEnableSchedulingHeaders
}

type ComputeNodeEnableSchedulingResponse struct {
	BatchError  *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
