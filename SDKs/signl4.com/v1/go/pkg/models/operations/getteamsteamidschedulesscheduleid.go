package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsTeamIDSchedulesScheduleIDPathParams struct {
	ScheduleID string `pathParam:"style=simple,explode=false,name=scheduleId"`
	TeamID     string `pathParam:"style=simple,explode=false,name=teamId"`
}

type GetTeamsTeamIDSchedulesScheduleIDRequest struct {
	PathParams GetTeamsTeamIDSchedulesScheduleIDPathParams
}

type GetTeamsTeamIDSchedulesScheduleIDResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	ScheduleInfo         *shared.ScheduleInfo
	StatusCode           int64
}
