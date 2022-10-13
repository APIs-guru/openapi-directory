package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsTeamIDEventSourcesPathParams struct {
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
}

type GetTeamsTeamIDEventSourcesRequest struct {
	PathParams GetTeamsTeamIDEventSourcesPathParams
}

type GetTeamsTeamIDEventSourcesResponse struct {
	Body                     []byte
	ContentType              string
	ErrorResponseContent     *shared.ErrorResponseContent
	EventSourceEndpointInfos []shared.EventSourceEndpointInfo
	StatusCode               int64
}
