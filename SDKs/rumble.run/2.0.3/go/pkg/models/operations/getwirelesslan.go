package operations

import (
"openapi/pkg/models/shared")

type GetWirelessLanPathParams struct {
    WirelessID string `pathParam:"style=simple,explode=false,name=wireless_id"`
    
}

type GetWirelessLanSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetWirelessLanRequest struct {
    PathParams GetWirelessLanPathParams 
    Security GetWirelessLanSecurity 
    
}

type GetWirelessLanResponse struct {
    ContentType string 
    StatusCode int64 
    Wireless *shared.Wireless 
    
}

