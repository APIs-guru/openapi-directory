package operations

import (
"openapi/pkg/models/shared")

type EndpointRemoveEpisodesUserQueryParams struct {
    Ids string `queryParam:"style=form,explode=true,name=ids"`
    
}

type EndpointRemoveEpisodesUserHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    ContentType *string `header:"style=simple,explode=false,name=Content-Type"`
    
}

type EndpointRemoveEpisodesUserRequestBody struct {
    Ids []string `json:"ids,omitempty"`
    
}

type EndpointRemoveEpisodesUserSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointRemoveEpisodesUserRequest struct {
    QueryParams EndpointRemoveEpisodesUserQueryParams 
    Headers EndpointRemoveEpisodesUserHeaders 
    Request *EndpointRemoveEpisodesUserRequestBody `request:"mediaType=application/json"`
    Security EndpointRemoveEpisodesUserSecurity 
    
}

type EndpointRemoveEpisodesUserResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    StatusCode int64 
    
}

