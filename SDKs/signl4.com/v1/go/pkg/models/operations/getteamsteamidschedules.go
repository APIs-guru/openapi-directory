package operations

import (
"time"
"openapi/pkg/models/shared")

type GetTeamsTeamIDSchedulesPathParams struct {
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type GetTeamsTeamIDSchedulesQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=Limit"`
    MinDate *time.Time `queryParam:"style=form,explode=true,name=MinDate"`
    UserID *string `queryParam:"style=form,explode=true,name=UserId"`
    
}

type GetTeamsTeamIDSchedulesRequest struct {
    PathParams GetTeamsTeamIDSchedulesPathParams 
    QueryParams GetTeamsTeamIDSchedulesQueryParams 
    
}

type GetTeamsTeamIDSchedulesResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    ScheduleInfos []shared.ScheduleInfo 
    StatusCode int64 
    
}

