package operations

import (
"openapi/pkg/models/shared")
var CreateBrandRegistrationsServers = []string{
	"https://messaging.twilio.com",
}

type CreateBrandRegistrationsCreateBrandRegistrationsRequest struct {
    A2PProfileBundleSid string `form:"name=A2PProfileBundleSid"`
    BrandType *string `form:"name=BrandType"`
    CustomerProfileBundleSid string `form:"name=CustomerProfileBundleSid"`
    Mock *bool `form:"name=Mock"`
    SkipAutomaticSecVet *bool `form:"name=SkipAutomaticSecVet"`
    
}

type CreateBrandRegistrationsSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateBrandRegistrationsRequest struct {
    ServerURL *string 
    Request *CreateBrandRegistrationsCreateBrandRegistrationsRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateBrandRegistrationsSecurity 
    
}

type CreateBrandRegistrationsResponse struct {
    ContentType string 
    StatusCode int64 
    MessagingV1BrandRegistrations *shared.MessagingV1BrandRegistrations 
    
}

