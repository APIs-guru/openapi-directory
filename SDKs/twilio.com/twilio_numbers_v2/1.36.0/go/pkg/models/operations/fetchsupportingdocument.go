package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSupportingDocumentServers = []string{
	"https://numbers.twilio.com",
}

type FetchSupportingDocumentPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchSupportingDocumentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSupportingDocumentRequest struct {
	ServerURL  *string
	PathParams FetchSupportingDocumentPathParams
	Security   FetchSupportingDocumentSecurity
}

type FetchSupportingDocumentResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	NumbersV2RegulatoryComplianceSupportingDocument *shared.NumbersV2RegulatoryComplianceSupportingDocument
}
