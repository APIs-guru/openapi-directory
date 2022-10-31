package operations

import (
"openapi/pkg/models/shared")
var FetchCredentialAwsServers = []string{
	"https://accounts.twilio.com",
}

type FetchCredentialAwsPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchCredentialAwsSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchCredentialAwsRequest struct {
    ServerURL *string 
    PathParams FetchCredentialAwsPathParams 
    Security FetchCredentialAwsSecurity 
    
}

type FetchCredentialAwsResponse struct {
    ContentType string 
    StatusCode int64 
    AccountsV1CredentialCredentialAws *shared.AccountsV1CredentialCredentialAws 
    
}

