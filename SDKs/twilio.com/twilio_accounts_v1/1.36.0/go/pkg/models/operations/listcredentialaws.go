package operations

import (
"openapi/pkg/models/shared")
var ListCredentialAwsServers = []string{
	"https://accounts.twilio.com",
}

type ListCredentialAwsQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListCredentialAwsSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListCredentialAwsRequest struct {
    ServerURL *string 
    QueryParams ListCredentialAwsQueryParams 
    Security ListCredentialAwsSecurity 
    
}

type ListCredentialAwsListCredentialAwsResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListCredentialAwsListCredentialAwsResponse struct {
    Credentials []shared.AccountsV1CredentialCredentialAws `json:"credentials,omitempty"`
    Meta *ListCredentialAwsListCredentialAwsResponseMeta `json:"meta,omitempty"`
    
}

type ListCredentialAwsResponse struct {
    ContentType string 
    ListCredentialAwsResponse *ListCredentialAwsListCredentialAwsResponse 
    StatusCode int64 
    
}

