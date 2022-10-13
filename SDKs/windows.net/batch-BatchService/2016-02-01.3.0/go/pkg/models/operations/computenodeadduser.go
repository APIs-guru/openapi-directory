package operations

type ComputeNodeAddUserPathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
	PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
}

type ComputeNodeAddUserQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type ComputeNodeAddUserHeaders struct {
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
}

type ComputeNodeAddUserRequest struct {
	PathParams  ComputeNodeAddUserPathParams
	QueryParams ComputeNodeAddUserQueryParams
	Headers     ComputeNodeAddUserHeaders
	Request     interface{} `request:"mediaType=application/json"`
}

type ComputeNodeAddUserResponse struct {
	BatchError  *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
