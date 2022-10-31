package operations

type ComputeNodeRebootPathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
	PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
}

type ComputeNodeRebootQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type ComputeNodeRebootHeaders struct {
	ClientRequestID       *string `header:"style=simple,explode=false,name=client-request-id"`
	OcpDate               *string `header:"style=simple,explode=false,name=ocp-date"`
	ReturnClientRequestID *bool   `header:"style=simple,explode=false,name=return-client-request-id"`
}

type ComputeNodeRebootRequest struct {
	PathParams  ComputeNodeRebootPathParams
	QueryParams ComputeNodeRebootQueryParams
	Headers     ComputeNodeRebootHeaders
	Request     *interface{} `request:"mediaType=application/json"`
}

type ComputeNodeRebootResponse struct {
	BatchError  *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
