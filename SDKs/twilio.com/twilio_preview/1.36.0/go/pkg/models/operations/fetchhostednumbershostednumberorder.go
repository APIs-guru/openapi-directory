package operations

import (
"openapi/pkg/models/shared")
var FetchHostedNumbersHostedNumberOrderServers = []string{
	"https://preview.twilio.com",
}

type FetchHostedNumbersHostedNumberOrderPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchHostedNumbersHostedNumberOrderSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchHostedNumbersHostedNumberOrderRequest struct {
    ServerURL *string 
    PathParams FetchHostedNumbersHostedNumberOrderPathParams 
    Security FetchHostedNumbersHostedNumberOrderSecurity 
    
}

type FetchHostedNumbersHostedNumberOrderResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewHostedNumbersHostedNumberOrder *shared.PreviewHostedNumbersHostedNumberOrder 
    
}

