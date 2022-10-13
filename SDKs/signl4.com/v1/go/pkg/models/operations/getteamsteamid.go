package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsTeamIDPathParams struct {
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
}

type GetTeamsTeamIDRequest struct {
	PathParams GetTeamsTeamIDPathParams
}

type GetTeamsTeamIDResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
	TeamInfo             *shared.TeamInfo
}
