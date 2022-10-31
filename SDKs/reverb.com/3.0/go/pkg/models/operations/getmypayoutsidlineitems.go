package operations

import (
"openapi/pkg/models/shared")

type GetMyPayoutsIDLineItemsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetMyPayoutsIDLineItemsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyPayoutsIDLineItemsRequest struct {
    PathParams GetMyPayoutsIDLineItemsPathParams 
    Security GetMyPayoutsIDLineItemsSecurity 
    
}

type GetMyPayoutsIDLineItemsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

