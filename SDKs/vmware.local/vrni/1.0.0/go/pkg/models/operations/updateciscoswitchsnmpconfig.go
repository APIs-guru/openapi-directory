package operations

import (
"openapi/pkg/models/shared")

type UpdateCiscoSwitchSnmpConfigPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateCiscoSwitchSnmpConfigSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateCiscoSwitchSnmpConfigRequest struct {
    PathParams UpdateCiscoSwitchSnmpConfigPathParams 
    Request *shared.SnmpConfig `request:"mediaType=application/json"`
    Security UpdateCiscoSwitchSnmpConfigSecurity 
    
}

type UpdateCiscoSwitchSnmpConfigResponse struct {
    APIError *shared.APIError 
    ContentType string 
    SnmpConfig *shared.SnmpConfig 
    StatusCode int64 
    
}

