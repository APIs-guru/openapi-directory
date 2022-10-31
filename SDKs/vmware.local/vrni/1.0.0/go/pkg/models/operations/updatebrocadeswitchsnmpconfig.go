package operations

import (
"openapi/pkg/models/shared")

type UpdateBrocadeSwitchSnmpConfigPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateBrocadeSwitchSnmpConfigSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateBrocadeSwitchSnmpConfigRequest struct {
    PathParams UpdateBrocadeSwitchSnmpConfigPathParams 
    Request *shared.SnmpConfig `request:"mediaType=application/json"`
    Security UpdateBrocadeSwitchSnmpConfigSecurity 
    
}

type UpdateBrocadeSwitchSnmpConfigResponse struct {
    APIError *shared.APIError 
    ContentType string 
    SnmpConfig *shared.SnmpConfig 
    StatusCode int64 
    
}

