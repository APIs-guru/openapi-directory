package operations

import (
	"openapi/pkg/models/shared"
)

type GetNodePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetNodeSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetNodeRequest struct {
	PathParams GetNodePathParams
	Security   GetNodeSecurity
}

type GetNodeResponse struct {
	ContentType string
	Node        *shared.Node
	StatusCode  int64
}
