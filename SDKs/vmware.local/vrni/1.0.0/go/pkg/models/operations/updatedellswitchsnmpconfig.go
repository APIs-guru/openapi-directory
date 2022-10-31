package operations

import (
"openapi/pkg/models/shared")

type UpdateDellSwitchSnmpConfigPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateDellSwitchSnmpConfigSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateDellSwitchSnmpConfigRequest struct {
    PathParams UpdateDellSwitchSnmpConfigPathParams 
    Request *shared.SnmpConfig `request:"mediaType=application/json"`
    Security UpdateDellSwitchSnmpConfigSecurity 
    
}

type UpdateDellSwitchSnmpConfigResponse struct {
    APIError *shared.APIError 
    ContentType string 
    SnmpConfig *shared.SnmpConfig 
    StatusCode int64 
    
}

