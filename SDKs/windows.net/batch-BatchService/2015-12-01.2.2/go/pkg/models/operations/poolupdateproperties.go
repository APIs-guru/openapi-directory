package operations

type PoolUpdatePropertiesPathParams struct {
	PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
}

type PoolUpdatePropertiesQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type PoolUpdatePropertiesHeaders struct {
	ClientRequestID       *string `header:"style=simple,explode=false,name=client-request-id"`
	OcpDate               *string `header:"style=simple,explode=false,name=ocp-date"`
	ReturnClientRequestID *bool   `header:"style=simple,explode=false,name=return-client-request-id"`
}

type PoolUpdatePropertiesRequest struct {
	PathParams  PoolUpdatePropertiesPathParams
	QueryParams PoolUpdatePropertiesQueryParams
	Headers     PoolUpdatePropertiesHeaders
	Request     interface{} `request:"mediaType=application/json"`
}

type PoolUpdatePropertiesResponse struct {
	BatchError  *interface{}
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
