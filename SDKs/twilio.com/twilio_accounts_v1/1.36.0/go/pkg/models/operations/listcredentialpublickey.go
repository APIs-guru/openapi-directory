package operations

import (
"openapi/pkg/models/shared")
var ListCredentialPublicKeyServers = []string{
	"https://accounts.twilio.com",
}

type ListCredentialPublicKeyQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListCredentialPublicKeySecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListCredentialPublicKeyRequest struct {
    ServerURL *string 
    QueryParams ListCredentialPublicKeyQueryParams 
    Security ListCredentialPublicKeySecurity 
    
}

type ListCredentialPublicKeyListCredentialPublicKeyResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListCredentialPublicKeyListCredentialPublicKeyResponse struct {
    Credentials []shared.AccountsV1CredentialCredentialPublicKey `json:"credentials,omitempty"`
    Meta *ListCredentialPublicKeyListCredentialPublicKeyResponseMeta `json:"meta,omitempty"`
    
}

type ListCredentialPublicKeyResponse struct {
    ContentType string 
    ListCredentialPublicKeyResponse *ListCredentialPublicKeyListCredentialPublicKeyResponse 
    StatusCode int64 
    
}

