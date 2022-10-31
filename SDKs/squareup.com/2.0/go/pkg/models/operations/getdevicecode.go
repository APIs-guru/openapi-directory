package operations

import (
"openapi/pkg/models/shared")

type GetDeviceCodePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetDeviceCodeSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetDeviceCodeRequest struct {
    PathParams GetDeviceCodePathParams 
    Security GetDeviceCodeSecurity 
    
}

type GetDeviceCodeResponse struct {
    ContentType string 
    GetDeviceCodeResponse *shared.GetDeviceCodeResponse 
    StatusCode int64 
    
}

