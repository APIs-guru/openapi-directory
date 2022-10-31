package operations

import (
"openapi/pkg/models/shared")
var FetchWirelessUsageServers = []string{
	"https://preview.twilio.com",
}

type FetchWirelessUsagePathParams struct {
    SimSid string `pathParam:"style=simple,explode=false,name=SimSid"`
    
}

type FetchWirelessUsageQueryParams struct {
    End *string `queryParam:"style=form,explode=true,name=End"`
    Start *string `queryParam:"style=form,explode=true,name=Start"`
    
}

type FetchWirelessUsageSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchWirelessUsageRequest struct {
    ServerURL *string 
    PathParams FetchWirelessUsagePathParams 
    QueryParams FetchWirelessUsageQueryParams 
    Security FetchWirelessUsageSecurity 
    
}

type FetchWirelessUsageResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewWirelessSimUsage *shared.PreviewWirelessSimUsage 
    
}

