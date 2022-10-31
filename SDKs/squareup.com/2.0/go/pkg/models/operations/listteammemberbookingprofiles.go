package operations

import (
"openapi/pkg/models/shared")

type ListTeamMemberBookingProfilesQueryParams struct {
    BookableOnly *bool `queryParam:"style=form,explode=true,name=bookable_only"`
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    LocationID *string `queryParam:"style=form,explode=true,name=location_id"`
    
}

type ListTeamMemberBookingProfilesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ListTeamMemberBookingProfilesRequest struct {
    QueryParams ListTeamMemberBookingProfilesQueryParams 
    Security ListTeamMemberBookingProfilesSecurity 
    
}

type ListTeamMemberBookingProfilesResponse struct {
    ContentType string 
    ListTeamMemberBookingProfilesResponse *shared.ListTeamMemberBookingProfilesResponse 
    StatusCode int64 
    
}

