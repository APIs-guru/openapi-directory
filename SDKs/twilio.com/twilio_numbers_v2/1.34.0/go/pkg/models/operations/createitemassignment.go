package operations

import (
	"openapi/pkg/models/shared"
)

var CreateItemAssignmentServers = []string{
	"https://numbers.twilio.com",
}

type CreateItemAssignmentPathParams struct {
	BundleSid string `pathParam:"style=simple,explode=false,name=BundleSid"`
}

type CreateItemAssignmentRequestBodyCreateItemAssignmentRequest struct {
	ObjectSid string `form:"name=ObjectSid"`
}

type CreateItemAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateItemAssignmentRequest struct {
	ServerURL  *string
	PathParams CreateItemAssignmentPathParams
	Request    *CreateItemAssignmentRequestBodyCreateItemAssignmentRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateItemAssignmentSecurity
}

type CreateItemAssignmentResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	NumbersV2RegulatoryComplianceBundleItemAssignment *shared.NumbersV2RegulatoryComplianceBundleItemAssignment
}
