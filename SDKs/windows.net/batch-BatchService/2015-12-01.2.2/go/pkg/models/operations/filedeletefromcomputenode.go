package operations

type FileDeleteFromComputeNodePathParams struct {
	FileName string `pathParam:"style=simple,explode=false,name=fileName"`
	NodeID   string `pathParam:"style=simple,explode=false,name=nodeId"`
	PoolID   string `pathParam:"style=simple,explode=false,name=poolId"`
}

type FileDeleteFromComputeNodeQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Recursive  *bool  `queryParam:"style=form,explode=true,name=recursive"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type FileDeleteFromComputeNodeHeaders struct {
	ClientRequestID       *string `header:"style=simple,explode=false,name=client-request-id"`
	OcpDate               *string `header:"style=simple,explode=false,name=ocp-date"`
	ReturnClientRequestID *bool   `header:"style=simple,explode=false,name=return-client-request-id"`
}

type FileDeleteFromComputeNodeRequest struct {
	PathParams  FileDeleteFromComputeNodePathParams
	QueryParams FileDeleteFromComputeNodeQueryParams
	Headers     FileDeleteFromComputeNodeHeaders
}

type FileDeleteFromComputeNodeResponse struct {
	BatchError  *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
