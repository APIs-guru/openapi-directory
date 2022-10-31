package operations

import (
"openapi/pkg/models/shared")
var CreateSupportingDocumentServers = []string{
	"https://numbers.twilio.com",
}

type CreateSupportingDocumentCreateSupportingDocumentRequest struct {
    Attributes *interface{} `form:"name=Attributes"`
    FriendlyName string `form:"name=FriendlyName"`
    Type string `form:"name=Type"`
    
}

type CreateSupportingDocumentSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateSupportingDocumentRequest struct {
    ServerURL *string 
    Request *CreateSupportingDocumentCreateSupportingDocumentRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateSupportingDocumentSecurity 
    
}

type CreateSupportingDocumentResponse struct {
    ContentType string 
    StatusCode int64 
    NumbersV2RegulatoryComplianceSupportingDocument *shared.NumbersV2RegulatoryComplianceSupportingDocument 
    
}

