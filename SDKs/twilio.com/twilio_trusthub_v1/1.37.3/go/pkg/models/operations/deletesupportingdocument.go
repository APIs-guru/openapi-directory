package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSupportingDocumentServerList = []string{
	"https://trusthub.twilio.com",
}

type DeleteSupportingDocumentPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSupportingDocumentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSupportingDocumentRequest struct {
	ServerURL  *string
	PathParams DeleteSupportingDocumentPathParams
	Security   DeleteSupportingDocumentSecurity
}

type DeleteSupportingDocumentResponse struct {
	ContentType string
	StatusCode  int64
}
