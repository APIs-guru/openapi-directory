package operations

import (
"openapi/pkg/models/shared")

type AccountCtrlGetLocationsByAccountIDPathParams struct {
    AccountID float64 `pathParam:"style=simple,explode=false,name=account_id"`
    
}

type AccountCtrlGetLocationsByAccountIDSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type AccountCtrlGetLocationsByAccountIDRequest struct {
    PathParams AccountCtrlGetLocationsByAccountIDPathParams 
    Security AccountCtrlGetLocationsByAccountIDSecurity 
    
}

type AccountCtrlGetLocationsByAccountIDResponse struct {
    ContentType string 
    LocationsHalResponse *shared.LocationsHalResponse 
    StatusCode int64 
    
}

