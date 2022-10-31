package operations

import (
"openapi/pkg/models/shared")

type EndpointSearchQueryParams struct {
    IncludeExternal *string `queryParam:"style=form,explode=true,name=include_external"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Market *string `queryParam:"style=form,explode=true,name=market"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    Q string `queryParam:"style=form,explode=true,name=q"`
    Type string `queryParam:"style=form,explode=true,name=type"`
    
}

type EndpointSearchHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointSearchSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointSearchRequest struct {
    QueryParams EndpointSearchQueryParams 
    Headers EndpointSearchHeaders 
    Security EndpointSearchSecurity 
    
}

type EndpointSearchResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    SearchResponseObject *shared.SearchResponseObject 
    StatusCode int64 
    
}

