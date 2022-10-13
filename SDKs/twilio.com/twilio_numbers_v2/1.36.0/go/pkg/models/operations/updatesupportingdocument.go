package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSupportingDocumentServers = []string{
	"https://numbers.twilio.com",
}

type UpdateSupportingDocumentPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateSupportingDocumentRequestBodyUpdateSupportingDocumentRequest struct {
	Attributes   *interface{} `form:"name=Attributes"`
	FriendlyName *string      `form:"name=FriendlyName"`
}

type UpdateSupportingDocumentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSupportingDocumentRequest struct {
	ServerURL  *string
	PathParams UpdateSupportingDocumentPathParams
	Request    *UpdateSupportingDocumentRequestBodyUpdateSupportingDocumentRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSupportingDocumentSecurity
}

type UpdateSupportingDocumentResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	NumbersV2RegulatoryComplianceSupportingDocument *shared.NumbersV2RegulatoryComplianceSupportingDocument
}
