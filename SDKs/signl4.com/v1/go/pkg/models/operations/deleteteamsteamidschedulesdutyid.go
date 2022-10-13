package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTeamsTeamIDSchedulesDutyIDPathParams struct {
	DutyID string `pathParam:"style=simple,explode=false,name=dutyId"`
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
}

type DeleteTeamsTeamIDSchedulesDutyIDRequest struct {
	PathParams DeleteTeamsTeamIDSchedulesDutyIDPathParams
}

type DeleteTeamsTeamIDSchedulesDutyIDResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
}
