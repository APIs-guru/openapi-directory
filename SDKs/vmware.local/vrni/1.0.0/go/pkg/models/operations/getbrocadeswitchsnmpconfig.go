package operations

import (
"openapi/pkg/models/shared")

type GetBrocadeSwitchSnmpConfigPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetBrocadeSwitchSnmpConfigSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetBrocadeSwitchSnmpConfigRequest struct {
    PathParams GetBrocadeSwitchSnmpConfigPathParams 
    Security GetBrocadeSwitchSnmpConfigSecurity 
    
}

type GetBrocadeSwitchSnmpConfigResponse struct {
    ContentType string 
    SnmpConfig *shared.SnmpConfig 
    StatusCode int64 
    
}

