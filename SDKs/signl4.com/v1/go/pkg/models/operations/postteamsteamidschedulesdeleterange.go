package operations

import (
	"openapi/pkg/models/shared"
)

type PostTeamsTeamIDSchedulesDeleteRangePathParams struct {
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
}

type PostTeamsTeamIDSchedulesDeleteRangeRequests struct {
	DeleteRangeInfo  *shared.DeleteRangeInfo `request:"mediaType=application/*+json"`
	DeleteRangeInfo1 *shared.DeleteRangeInfo `request:"mediaType=application/json"`
	DeleteRangeInfo2 *shared.DeleteRangeInfo `request:"mediaType=application/json-patch+json"`
	DeleteRangeInfo3 *shared.DeleteRangeInfo `request:"mediaType=text/json"`
}

type PostTeamsTeamIDSchedulesDeleteRangeRequest struct {
	PathParams PostTeamsTeamIDSchedulesDeleteRangePathParams
	Request    *PostTeamsTeamIDSchedulesDeleteRangeRequests
}

type PostTeamsTeamIDSchedulesDeleteRangeResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	ScheduleInfos        []shared.ScheduleInfo
	StatusCode           int64
}
