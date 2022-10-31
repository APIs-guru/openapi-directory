package operations

import (
"openapi/pkg/models/shared")
var ListShortCodeServers = []string{
	"https://api.twilio.com",
}

type ListShortCodePathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    
}

type ListShortCodeQueryParams struct {
    FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    ShortCode *string `queryParam:"style=form,explode=true,name=ShortCode"`
    
}

type ListShortCodeSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListShortCodeRequest struct {
    ServerURL *string 
    PathParams ListShortCodePathParams 
    QueryParams ListShortCodeQueryParams 
    Security ListShortCodeSecurity 
    
}

type ListShortCodeListShortCodeResponse struct {
    End *int64 `json:"end,omitempty"`
    FirstPageURI *string `json:"first_page_uri,omitempty"`
    NextPageURI *string `json:"next_page_uri,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURI *string `json:"previous_page_uri,omitempty"`
    ShortCodes []shared.APIV2010AccountShortCode `json:"short_codes,omitempty"`
    Start *int64 `json:"start,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type ListShortCodeResponse struct {
    ContentType string 
    ListShortCodeResponse *ListShortCodeListShortCodeResponse 
    StatusCode int64 
    
}

