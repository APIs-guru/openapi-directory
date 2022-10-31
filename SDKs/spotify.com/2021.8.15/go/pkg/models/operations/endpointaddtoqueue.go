package operations

import (
"openapi/pkg/models/shared")

type EndpointAddToQueueQueryParams struct {
    DeviceID *string `queryParam:"style=form,explode=true,name=device_id"`
    URI string `queryParam:"style=form,explode=true,name=uri"`
    
}

type EndpointAddToQueueHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type EndpointAddToQueueSecurity struct {
    SpotifyAuth shared.SchemeSpotifyAuth `security:"scheme,type=oauth2"`
    
}

type EndpointAddToQueueRequest struct {
    QueryParams EndpointAddToQueueQueryParams 
    Headers EndpointAddToQueueHeaders 
    Security EndpointAddToQueueSecurity 
    
}

type EndpointAddToQueueResponse struct {
    ContentType string 
    ErrorResponseObject *shared.ErrorResponseObject 
    StatusCode int64 
    
}

