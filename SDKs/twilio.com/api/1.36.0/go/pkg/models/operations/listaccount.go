package operations

import (
"openapi/pkg/models/shared")
var ListAccountServers = []string{
	"https://api.twilio.com",
}

type ListAccountQueryParams struct {
    FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    Status *shared.AccountEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
    
}

type ListAccountSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListAccountRequest struct {
    ServerURL *string 
    QueryParams ListAccountQueryParams 
    Security ListAccountSecurity 
    
}

type ListAccountListAccountResponse struct {
    Accounts []shared.APIV2010Account `json:"accounts,omitempty"`
    End *int64 `json:"end,omitempty"`
    FirstPageURI *string `json:"first_page_uri,omitempty"`
    NextPageURI *string `json:"next_page_uri,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURI *string `json:"previous_page_uri,omitempty"`
    Start *int64 `json:"start,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type ListAccountResponse struct {
    ContentType string 
    ListAccountResponse *ListAccountListAccountResponse 
    StatusCode int64 
    
}

