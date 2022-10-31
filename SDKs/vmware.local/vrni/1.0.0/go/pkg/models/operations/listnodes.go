package operations

import (
	"openapi/pkg/models/shared"
)

type ListNodesSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type ListNodesRequest struct {
	Security ListNodesSecurity
}

type ListNodesResponse struct {
	ContentType    string
	NodeListResult *shared.NodeListResult
	StatusCode     int64
}
