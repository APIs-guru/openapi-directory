package operations

import (
"openapi/pkg/models/shared")

type ChargePathParams struct {
    LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
    
}

type ChargeSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ChargeRequest struct {
    PathParams ChargePathParams 
    Request shared.ChargeRequest `request:"mediaType=application/json"`
    Security ChargeSecurity 
    
}

type ChargeResponse struct {
    ChargeResponse *shared.ChargeResponse 
    ContentType string 
    StatusCode int64 
    
}

