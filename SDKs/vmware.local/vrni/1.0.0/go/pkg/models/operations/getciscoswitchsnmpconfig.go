package operations

import (
"openapi/pkg/models/shared")

type GetCiscoSwitchSnmpConfigPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetCiscoSwitchSnmpConfigSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetCiscoSwitchSnmpConfigRequest struct {
    PathParams GetCiscoSwitchSnmpConfigPathParams 
    Security GetCiscoSwitchSnmpConfigSecurity 
    
}

type GetCiscoSwitchSnmpConfigResponse struct {
    ContentType string 
    SnmpConfig *shared.SnmpConfig 
    StatusCode int64 
    
}

