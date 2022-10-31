package operations

import (
"openapi/pkg/models/shared")
var ListSipIPAccessControlListServers = []string{
	"https://api.twilio.com",
}

type ListSipIPAccessControlListPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    
}

type ListSipIPAccessControlListQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListSipIPAccessControlListSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListSipIPAccessControlListRequest struct {
    ServerURL *string 
    PathParams ListSipIPAccessControlListPathParams 
    QueryParams ListSipIPAccessControlListQueryParams 
    Security ListSipIPAccessControlListSecurity 
    
}

type ListSipIPAccessControlListListSipIPAccessControlListResponse struct {
    End *int64 `json:"end,omitempty"`
    FirstPageURI *string `json:"first_page_uri,omitempty"`
    IPAccessControlLists []shared.APIV2010AccountSipSipIPAccessControlList `json:"ip_access_control_lists,omitempty"`
    NextPageURI *string `json:"next_page_uri,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURI *string `json:"previous_page_uri,omitempty"`
    Start *int64 `json:"start,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type ListSipIPAccessControlListResponse struct {
    ContentType string 
    ListSipIPAccessControlListResponse *ListSipIPAccessControlListListSipIPAccessControlListResponse 
    StatusCode int64 
    
}

