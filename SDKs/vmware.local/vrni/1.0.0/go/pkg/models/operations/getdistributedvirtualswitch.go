package operations

import (
"openapi/pkg/models/shared")

type GetDistributedVirtualSwitchPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetDistributedVirtualSwitchQueryParams struct {
    Time *int64 `queryParam:"style=form,explode=true,name=time"`
    
}

type GetDistributedVirtualSwitchSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetDistributedVirtualSwitchRequest struct {
    PathParams GetDistributedVirtualSwitchPathParams 
    QueryParams GetDistributedVirtualSwitchQueryParams 
    Security GetDistributedVirtualSwitchSecurity 
    
}

type GetDistributedVirtualSwitchResponse struct {
    APIError *shared.APIError 
    ContentType string 
    DistributedVirtualSwitch *shared.DistributedVirtualSwitch 
    StatusCode int64 
    
}

