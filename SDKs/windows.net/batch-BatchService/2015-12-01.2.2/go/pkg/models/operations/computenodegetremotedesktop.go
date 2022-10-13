package operations

type ComputeNodeGetRemoteDesktopPathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
	PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
}

type ComputeNodeGetRemoteDesktopQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
	Timeout    *int32 `queryParam:"style=form,explode=true,name=timeout"`
}

type ComputeNodeGetRemoteDesktopHeaders struct {
	ClientRequestID       *string `header:"name=client-request-id"`
	OcpDate               *string `header:"name=ocp-date"`
	ReturnClientRequestID *bool   `header:"name=return-client-request-id"`
}

type ComputeNodeGetRemoteDesktopRequest struct {
	PathParams  ComputeNodeGetRemoteDesktopPathParams
	QueryParams ComputeNodeGetRemoteDesktopQueryParams
	Headers     ComputeNodeGetRemoteDesktopHeaders
}

type ComputeNodeGetRemoteDesktopResponse struct {
	BatchError                                                *interface{}
	ComputeNodeGetRemoteDesktop200ApplicationJSONBinaryString []byte
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
}
