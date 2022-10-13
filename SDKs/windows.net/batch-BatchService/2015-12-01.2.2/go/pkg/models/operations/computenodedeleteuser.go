package operations

type ComputeNodeDeleteUserPathParams struct {
	NodeID   string `pathParam:"style=simple,explode=false,name=nodeId"`
	PoolID   string `pathParam:"style=simple,explode=false,name=poolId"`
	UserName string `pathParam:"style=simple,explode=false,name=userName"`
}

type ComputeNodeDeleteUserQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type ComputeNodeDeleteUserHeaders struct {
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
}

type ComputeNodeDeleteUserRequest struct {
	PathParams  ComputeNodeDeleteUserPathParams
	QueryParams ComputeNodeDeleteUserQueryParams
	Headers     ComputeNodeDeleteUserHeaders
}

type ComputeNodeDeleteUserResponse struct {
	BatchError  *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
