package operations

import (
"openapi/pkg/models/shared")
var ListSipCredentialListServers = []string{
	"https://api.twilio.com",
}

type ListSipCredentialListPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    
}

type ListSipCredentialListQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListSipCredentialListSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListSipCredentialListRequest struct {
    ServerURL *string 
    PathParams ListSipCredentialListPathParams 
    QueryParams ListSipCredentialListQueryParams 
    Security ListSipCredentialListSecurity 
    
}

type ListSipCredentialListListSipCredentialListResponse struct {
    CredentialLists []shared.APIV2010AccountSipSipCredentialList `json:"credential_lists,omitempty"`
    End *int64 `json:"end,omitempty"`
    FirstPageURI *string `json:"first_page_uri,omitempty"`
    NextPageURI *string `json:"next_page_uri,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURI *string `json:"previous_page_uri,omitempty"`
    Start *int64 `json:"start,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type ListSipCredentialListResponse struct {
    ContentType string 
    ListSipCredentialListResponse *ListSipCredentialListListSipCredentialListResponse 
    StatusCode int64 
    
}

