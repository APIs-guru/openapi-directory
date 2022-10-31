package operations

import (
"openapi/pkg/models/shared")

type GetAristaSwitchSnmpConfigPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAristaSwitchSnmpConfigSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetAristaSwitchSnmpConfigRequest struct {
    PathParams GetAristaSwitchSnmpConfigPathParams 
    Security GetAristaSwitchSnmpConfigSecurity 
    
}

type GetAristaSwitchSnmpConfigResponse struct {
    ContentType string 
    SnmpConfig *shared.SnmpConfig 
    StatusCode int64 
    
}

