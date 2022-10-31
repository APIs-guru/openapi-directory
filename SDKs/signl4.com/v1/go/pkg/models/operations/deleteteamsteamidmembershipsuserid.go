package operations

import (
"openapi/pkg/models/shared")

type DeleteTeamsTeamIDMembershipsUserIDPathParams struct {
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type DeleteTeamsTeamIDMembershipsUserIDQueryParams struct {
    RequesterUserID *string `queryParam:"style=form,explode=true,name=requesterUserId"`
    
}

type DeleteTeamsTeamIDMembershipsUserIDRequest struct {
    PathParams DeleteTeamsTeamIDMembershipsUserIDPathParams 
    QueryParams DeleteTeamsTeamIDMembershipsUserIDQueryParams 
    
}

type DeleteTeamsTeamIDMembershipsUserIDResponse struct {
    Body []byte 
    ContentType string 
    DeleteTeamsTeamIDMembershipsUserID200ApplicationJSONString *string 
    DeleteTeamsTeamIDMembershipsUserID200TextJSONString *string 
    DeleteTeamsTeamIDMembershipsUserID200TextPlainString *string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    
}

