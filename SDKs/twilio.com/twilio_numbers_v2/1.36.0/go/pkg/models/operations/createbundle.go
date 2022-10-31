package operations

import (
"openapi/pkg/models/shared")
var CreateBundleServers = []string{
	"https://numbers.twilio.com",
}

type CreateBundleCreateBundleRequest struct {
    Email string `form:"name=Email"`
    EndUserType *shared.BundleEnumEndUserTypeEnum `form:"name=EndUserType"`
    FriendlyName string `form:"name=FriendlyName"`
    IsoCountry *string `form:"name=IsoCountry"`
    NumberType *string `form:"name=NumberType"`
    RegulationSid *string `form:"name=RegulationSid"`
    StatusCallback *string `form:"name=StatusCallback"`
    
}

type CreateBundleSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateBundleRequest struct {
    ServerURL *string 
    Request *CreateBundleCreateBundleRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateBundleSecurity 
    
}

type CreateBundleResponse struct {
    ContentType string 
    StatusCode int64 
    NumbersV2RegulatoryComplianceBundle *shared.NumbersV2RegulatoryComplianceBundle 
    
}

