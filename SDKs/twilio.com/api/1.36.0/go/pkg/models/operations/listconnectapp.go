package operations

import (
"openapi/pkg/models/shared")
var ListConnectAppServers = []string{
	"https://api.twilio.com",
}

type ListConnectAppPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    
}

type ListConnectAppQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListConnectAppSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListConnectAppRequest struct {
    ServerURL *string 
    PathParams ListConnectAppPathParams 
    QueryParams ListConnectAppQueryParams 
    Security ListConnectAppSecurity 
    
}

type ListConnectAppListConnectAppResponse struct {
    ConnectApps []shared.APIV2010AccountConnectApp `json:"connect_apps,omitempty"`
    End *int64 `json:"end,omitempty"`
    FirstPageURI *string `json:"first_page_uri,omitempty"`
    NextPageURI *string `json:"next_page_uri,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURI *string `json:"previous_page_uri,omitempty"`
    Start *int64 `json:"start,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type ListConnectAppResponse struct {
    ContentType string 
    ListConnectAppResponse *ListConnectAppListConnectAppResponse 
    StatusCode int64 
    
}

