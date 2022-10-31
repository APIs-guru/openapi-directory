package operations

type PoolEvaluateAutoScalePathParams struct {
	PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
}

type PoolEvaluateAutoScaleQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type PoolEvaluateAutoScaleHeaders struct {
	ClientRequestID       *string `header:"style=simple,explode=false,name=client-request-id"`
	OcpDate               *string `header:"style=simple,explode=false,name=ocp-date"`
	ReturnClientRequestID *bool   `header:"style=simple,explode=false,name=return-client-request-id"`
}

type PoolEvaluateAutoScaleRequest struct {
	PathParams  PoolEvaluateAutoScalePathParams
	QueryParams PoolEvaluateAutoScaleQueryParams
	Headers     PoolEvaluateAutoScaleHeaders
	Request     interface{} `request:"mediaType=application/json"`
}

type PoolEvaluateAutoScaleResponse struct {
	AutoScaleRun *interface{}
	BatchError   *interface{}
	ContentType  string
	Headers      map[string][]string
	StatusCode   int64
}
