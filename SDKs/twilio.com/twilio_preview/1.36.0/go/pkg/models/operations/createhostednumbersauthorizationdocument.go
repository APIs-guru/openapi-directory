package operations

import (
	"openapi/pkg/models/shared"
)

var CreateHostedNumbersAuthorizationDocumentServers = []string{
	"https://preview.twilio.com",
}

type CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest struct {
	AddressSid            string   `form:"name=AddressSid"`
	CcEmails              []string `form:"name=CcEmails"`
	ContactPhoneNumber    string   `form:"name=ContactPhoneNumber"`
	ContactTitle          string   `form:"name=ContactTitle"`
	Email                 string   `form:"name=Email"`
	HostedNumberOrderSids []string `form:"name=HostedNumberOrderSids"`
}

type CreateHostedNumbersAuthorizationDocumentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateHostedNumbersAuthorizationDocumentRequest struct {
	ServerURL *string
	Request   *CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateHostedNumbersAuthorizationDocumentSecurity
}

type CreateHostedNumbersAuthorizationDocumentResponse struct {
	ContentType                               string
	StatusCode                                int64
	PreviewHostedNumbersAuthorizationDocument *shared.PreviewHostedNumbersAuthorizationDocument
}
