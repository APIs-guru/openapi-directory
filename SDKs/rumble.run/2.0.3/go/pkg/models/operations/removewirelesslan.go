package operations

import (
"openapi/pkg/models/shared")

type RemoveWirelessLanPathParams struct {
    WirelessID string `pathParam:"style=simple,explode=false,name=wireless_id"`
    
}

type RemoveWirelessLanSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type RemoveWirelessLanRequest struct {
    PathParams RemoveWirelessLanPathParams 
    Security RemoveWirelessLanSecurity 
    
}

type RemoveWirelessLanResponse struct {
    ContentType string 
    StatusCode int64 
    
}

