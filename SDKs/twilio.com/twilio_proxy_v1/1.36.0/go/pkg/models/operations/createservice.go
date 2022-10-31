package operations

import (
"openapi/pkg/models/shared")
var CreateServiceServers = []string{
	"https://proxy.twilio.com",
}

type CreateServiceCreateServiceRequest struct {
    CallbackURL *string `form:"name=CallbackUrl"`
    ChatInstanceSid *string `form:"name=ChatInstanceSid"`
    DefaultTTL *int64 `form:"name=DefaultTtl"`
    GeoMatchLevel *shared.ServiceEnumGeoMatchLevelEnum `form:"name=GeoMatchLevel"`
    InterceptCallbackURL *string `form:"name=InterceptCallbackUrl"`
    NumberSelectionBehavior *shared.ServiceEnumNumberSelectionBehaviorEnum `form:"name=NumberSelectionBehavior"`
    OutOfSessionCallbackURL *string `form:"name=OutOfSessionCallbackUrl"`
    UniqueName string `form:"name=UniqueName"`
    
}

type CreateServiceSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateServiceRequest struct {
    ServerURL *string 
    Request *CreateServiceCreateServiceRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateServiceSecurity 
    
}

type CreateServiceResponse struct {
    ContentType string 
    StatusCode int64 
    ProxyV1Service *shared.ProxyV1Service 
    
}

