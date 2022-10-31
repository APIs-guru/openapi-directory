package operations

import (
"openapi/pkg/models/shared")

type EndpointGetFollowedQueryParams struct {
    After *string `queryParam:"style=form,explode=true,name=after"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Type string `queryParam:"style=form,explode=true,name=type"`
    
}

type EndpointGetFollowedHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointGetFollowedSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointGetFollowedRequest struct {
    QueryParams EndpointGetFollowedQueryParams 
    Headers EndpointGetFollowedHeaders 
    Security EndpointGetFollowedSecurity 
    
}

type EndpointGetFollowedResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    FollowingArtistsObject *shared.FollowingArtistsObject 
    StatusCode int64 
    
}

