package operations

type PoolDisableAutoScalePathParams struct {
	PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
}

type PoolDisableAutoScaleQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type PoolDisableAutoScaleHeaders struct {
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
}

type PoolDisableAutoScaleRequest struct {
	PathParams  PoolDisableAutoScalePathParams
	QueryParams PoolDisableAutoScaleQueryParams
	Headers     PoolDisableAutoScaleHeaders
}

type PoolDisableAutoScaleResponse struct {
	BatchError  *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
