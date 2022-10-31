package operations

import (
"openapi/pkg/models/shared")
var DeleteSyncListItemServers = []string{
	"https://sync.twilio.com",
}

type DeleteSyncListItemPathParams struct {
    Index int64 `pathParam:"style=simple,explode=false,name=Index"`
    ListSid string `pathParam:"style=simple,explode=false,name=ListSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type DeleteSyncListItemHeaders struct {
    IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
    
}

type DeleteSyncListItemSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteSyncListItemRequest struct {
    ServerURL *string 
    PathParams DeleteSyncListItemPathParams 
    Headers DeleteSyncListItemHeaders 
    Security DeleteSyncListItemSecurity 
    
}

type DeleteSyncListItemResponse struct {
    ContentType string 
    StatusCode int64 
    
}

