package operations

type PoolUpdatePropertiesPathParams struct {
	PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
}

type PoolUpdatePropertiesQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type PoolUpdatePropertiesHeaders struct {
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
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
