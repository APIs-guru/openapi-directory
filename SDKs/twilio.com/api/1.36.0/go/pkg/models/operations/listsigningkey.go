package operations

import (
"openapi/pkg/models/shared")
var ListSigningKeyServers = []string{
	"https://api.twilio.com",
}

type ListSigningKeyPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    
}

type ListSigningKeyQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListSigningKeySecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListSigningKeyRequest struct {
    ServerURL *string 
    PathParams ListSigningKeyPathParams 
    QueryParams ListSigningKeyQueryParams 
    Security ListSigningKeySecurity 
    
}

type ListSigningKeyListSigningKeyResponse struct {
    End *int64 `json:"end,omitempty"`
    FirstPageURI *string `json:"first_page_uri,omitempty"`
    NextPageURI *string `json:"next_page_uri,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURI *string `json:"previous_page_uri,omitempty"`
    SigningKeys []shared.APIV2010AccountSigningKey `json:"signing_keys,omitempty"`
    Start *int64 `json:"start,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type ListSigningKeyResponse struct {
    ContentType string 
    ListSigningKeyResponse *ListSigningKeyListSigningKeyResponse 
    StatusCode int64 
    
}

