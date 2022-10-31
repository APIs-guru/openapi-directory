package operations

import (
"openapi/pkg/models/shared")

type PutTeamsTeamIDMembershipsUserIDPathParams struct {
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type PutTeamsTeamIDMembershipsUserIDQueryParams struct {
    RequesterUserID *string `queryParam:"style=form,explode=true,name=requesterUserId"`
    
}

type PutTeamsTeamIDMembershipsUserIDRequests struct {
    UserMembership *shared.UserMembership `request:"mediaType=application/*+json"`
    UserMembership1 *shared.UserMembership `request:"mediaType=application/json"`
    UserMembership2 *shared.UserMembership `request:"mediaType=application/json-patch+json"`
    UserMembership3 *shared.UserMembership `request:"mediaType=text/json"`
    
}

type PutTeamsTeamIDMembershipsUserIDRequest struct {
    PathParams PutTeamsTeamIDMembershipsUserIDPathParams 
    QueryParams PutTeamsTeamIDMembershipsUserIDQueryParams 
    Request *PutTeamsTeamIDMembershipsUserIDRequests 
    
}

type PutTeamsTeamIDMembershipsUserIDResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    UserInfo *shared.UserInfo 
    
}

