package operations

type ComputeNodeGetRemoteLoginSettingsPathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
	PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
}

type ComputeNodeGetRemoteLoginSettingsQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type ComputeNodeGetRemoteLoginSettingsHeaders struct {
	ClientRequestID       *string `header:"style=simple,explode=false,name=client-request-id"`
	OcpDate               *string `header:"style=simple,explode=false,name=ocp-date"`
	ReturnClientRequestID *bool   `header:"style=simple,explode=false,name=return-client-request-id"`
}

type ComputeNodeGetRemoteLoginSettingsRequest struct {
	PathParams  ComputeNodeGetRemoteLoginSettingsPathParams
	QueryParams ComputeNodeGetRemoteLoginSettingsQueryParams
	Headers     ComputeNodeGetRemoteLoginSettingsHeaders
}

type ComputeNodeGetRemoteLoginSettingsResponse struct {
	BatchError                              *interface{}
	ComputeNodeGetRemoteLoginSettingsResult *interface{}
	ContentType                             string
	Headers                                 map[string][]string
	StatusCode                              int64
}
