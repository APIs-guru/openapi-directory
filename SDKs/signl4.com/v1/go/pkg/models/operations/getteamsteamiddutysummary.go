package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsTeamIDDutysummaryPathParams struct {
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
}

type GetTeamsTeamIDDutysummaryQueryParams struct {
	LastTwoDuties *bool `queryParam:"style=form,explode=true,name=lastTwoDuties"`
}

type GetTeamsTeamIDDutysummaryRequest struct {
	PathParams  GetTeamsTeamIDDutysummaryPathParams
	QueryParams GetTeamsTeamIDDutysummaryQueryParams
}

type GetTeamsTeamIDDutysummaryResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
	TeamDutySummaryInfo  *shared.TeamDutySummaryInfo
}
