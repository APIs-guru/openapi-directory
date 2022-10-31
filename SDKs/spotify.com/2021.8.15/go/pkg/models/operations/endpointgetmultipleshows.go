package operations

import (
"openapi/pkg/models/shared")

type EndpointGetMultipleShowsQueryParams struct {
    Ids string `queryParam:"style=form,explode=true,name=ids"`
    Market *string `queryParam:"style=form,explode=true,name=market"`
    
}

type EndpointGetMultipleShowsHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointGetMultipleShowsSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointGetMultipleShowsRequest struct {
    QueryParams EndpointGetMultipleShowsQueryParams 
    Headers EndpointGetMultipleShowsHeaders 
    Security EndpointGetMultipleShowsSecurity 
    
}

type EndpointGetMultipleShowsResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    ShowsObject *shared.ShowsObject 
    StatusCode int64 
    
}

