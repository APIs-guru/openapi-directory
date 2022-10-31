package operations

import (
"openapi/pkg/models/shared")
var FetchFleetServers = []string{
	"https://supersim.twilio.com",
}

type FetchFleetPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchFleetSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchFleetRequest struct {
    ServerURL *string 
    PathParams FetchFleetPathParams 
    Security FetchFleetSecurity 
    
}

type FetchFleetResponse struct {
    ContentType string 
    StatusCode int64 
    SupersimV1Fleet *shared.SupersimV1Fleet 
    
}

