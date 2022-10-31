package operations

import (
"openapi/pkg/models/shared")
var UpdateHostedNumbersAuthorizationDocumentServers = []string{
	"https://preview.twilio.com",
}

type UpdateHostedNumbersAuthorizationDocumentPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest struct {
    AddressSid *string `form:"name=AddressSid"`
    CcEmails []string `form:"name=CcEmails"`
    ContactPhoneNumber *string `form:"name=ContactPhoneNumber"`
    ContactTitle *string `form:"name=ContactTitle"`
    Email *string `form:"name=Email"`
    HostedNumberOrderSids []string `form:"name=HostedNumberOrderSids"`
    Status *shared.AuthorizationDocumentEnumStatusEnum `form:"name=Status"`
    
}

type UpdateHostedNumbersAuthorizationDocumentSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateHostedNumbersAuthorizationDocumentRequest struct {
    ServerURL *string 
    PathParams UpdateHostedNumbersAuthorizationDocumentPathParams 
    Request *UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateHostedNumbersAuthorizationDocumentSecurity 
    
}

type UpdateHostedNumbersAuthorizationDocumentResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewHostedNumbersAuthorizationDocument *shared.PreviewHostedNumbersAuthorizationDocument 
    
}

