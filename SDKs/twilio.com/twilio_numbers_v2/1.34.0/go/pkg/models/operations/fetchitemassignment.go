package operations

import (
	"openapi/pkg/models/shared"
)

var FetchItemAssignmentServers = []string{
	"https://numbers.twilio.com",
}

type FetchItemAssignmentPathParams struct {
	BundleSid string `pathParam:"style=simple,explode=false,name=BundleSid"`
	Sid       string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchItemAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchItemAssignmentRequest struct {
	ServerURL  *string
	PathParams FetchItemAssignmentPathParams
	Security   FetchItemAssignmentSecurity
}

type FetchItemAssignmentResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	NumbersV2RegulatoryComplianceBundleItemAssignment *shared.NumbersV2RegulatoryComplianceBundleItemAssignment
}
