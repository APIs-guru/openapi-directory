package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1AgentsFamilyPathParams struct {
	Family string `pathParam:"style=simple,explode=false,name=family"`
}

type GetAPIV1AgentsFamilyRequest struct {
	PathParams GetAPIV1AgentsFamilyPathParams
}

type GetAPIV1AgentsFamilyResponse struct {
	AgentResponse  *shared.AgentResponse
	Body           []byte
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
