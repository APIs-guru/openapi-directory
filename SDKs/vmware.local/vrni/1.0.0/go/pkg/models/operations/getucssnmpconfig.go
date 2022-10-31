package operations

import (
"openapi/pkg/models/shared")

type GetUcsSnmpConfigPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetUcsSnmpConfigSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetUcsSnmpConfigRequest struct {
    PathParams GetUcsSnmpConfigPathParams 
    Security GetUcsSnmpConfigSecurity 
    
}

type GetUcsSnmpConfigResponse struct {
    ContentType string 
    SnmpConfig *shared.SnmpConfig 
    StatusCode int64 
    
}

