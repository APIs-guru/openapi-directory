package operations

import (
	"openapi/pkg/models/shared"
)

type PostTeamsTeamIDSchedulesMultiplePathParams struct {
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
}

type PostTeamsTeamIDSchedulesMultipleQueryParams struct {
	OverrideExisting *bool `queryParam:"style=form,explode=true,name=overrideExisting"`
}

type PostTeamsTeamIDSchedulesMultipleRequests struct {
	ScheduleInfos  []shared.ScheduleInfo `request:"mediaType=application/*+json"`
	ScheduleInfos1 []shared.ScheduleInfo `request:"mediaType=application/json"`
	ScheduleInfos2 []shared.ScheduleInfo `request:"mediaType=application/json-patch+json"`
	ScheduleInfos3 []shared.ScheduleInfo `request:"mediaType=text/json"`
}

type PostTeamsTeamIDSchedulesMultipleRequest struct {
	PathParams  PostTeamsTeamIDSchedulesMultiplePathParams
	QueryParams PostTeamsTeamIDSchedulesMultipleQueryParams
	Request     *PostTeamsTeamIDSchedulesMultipleRequests
}

type PostTeamsTeamIDSchedulesMultipleResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	ScheduleInfos        []shared.ScheduleInfo
	StatusCode           int64
}
