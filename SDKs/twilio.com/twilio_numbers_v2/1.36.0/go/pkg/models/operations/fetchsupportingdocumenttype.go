package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSupportingDocumentTypeServers = []string{
	"https://numbers.twilio.com",
}

type FetchSupportingDocumentTypePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchSupportingDocumentTypeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSupportingDocumentTypeRequest struct {
	ServerURL  *string
	PathParams FetchSupportingDocumentTypePathParams
	Security   FetchSupportingDocumentTypeSecurity
}

type FetchSupportingDocumentTypeResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	NumbersV2RegulatoryComplianceSupportingDocumentType *shared.NumbersV2RegulatoryComplianceSupportingDocumentType
}
