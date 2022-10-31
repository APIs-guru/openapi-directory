package operations

import (
"openapi/pkg/models/shared")
var DeleteHostedNumbersHostedNumberOrderServers = []string{
	"https://preview.twilio.com",
}

type DeleteHostedNumbersHostedNumberOrderPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteHostedNumbersHostedNumberOrderSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteHostedNumbersHostedNumberOrderRequest struct {
    ServerURL *string 
    PathParams DeleteHostedNumbersHostedNumberOrderPathParams 
    Security DeleteHostedNumbersHostedNumberOrderSecurity 
    
}

type DeleteHostedNumbersHostedNumberOrderResponse struct {
    ContentType string 
    StatusCode int64 
    
}

