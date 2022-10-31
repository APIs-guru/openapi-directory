package operations

import (
"openapi/pkg/models/shared")

type PostTeamsTeamIDSchedulesPathParams struct {
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type PostTeamsTeamIDSchedulesRequests struct {
    ScheduleInfo *shared.ScheduleInfo `request:"mediaType=application/*+json"`
    ScheduleInfo1 *shared.ScheduleInfo `request:"mediaType=application/json"`
    ScheduleInfo2 *shared.ScheduleInfo `request:"mediaType=application/json-patch+json"`
    ScheduleInfo3 *shared.ScheduleInfo `request:"mediaType=text/json"`
    
}

type PostTeamsTeamIDSchedulesRequest struct {
    PathParams PostTeamsTeamIDSchedulesPathParams 
    Request *PostTeamsTeamIDSchedulesRequests 
    
}

type PostTeamsTeamIDSchedulesResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    ScheduleInfo *shared.ScheduleInfo 
    StatusCode int64 
    
}

