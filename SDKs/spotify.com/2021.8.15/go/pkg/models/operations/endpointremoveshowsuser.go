package operations

import (
"openapi/pkg/models/shared")

type EndpointRemoveShowsUserQueryParams struct {
    Ids string `queryParam:"style=form,explode=true,name=ids"`
    Market *string `queryParam:"style=form,explode=true,name=market"`
    
}

type EndpointRemoveShowsUserHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointRemoveShowsUserRequestBody struct {
    Ids []string `json:"ids,omitempty"`
    
}

type EndpointRemoveShowsUserSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointRemoveShowsUserRequest struct {
    QueryParams EndpointRemoveShowsUserQueryParams 
    Headers EndpointRemoveShowsUserHeaders 
    Request *EndpointRemoveShowsUserRequestBody `request:"mediaType=application/json"`
    Security EndpointRemoveShowsUserSecurity 
    
}

type EndpointRemoveShowsUserResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    StatusCode int64 
    
}

