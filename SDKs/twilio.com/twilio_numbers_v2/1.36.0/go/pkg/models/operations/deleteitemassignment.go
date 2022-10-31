package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteItemAssignmentServers = []string{
	"https://numbers.twilio.com",
}

type DeleteItemAssignmentPathParams struct {
	BundleSid string `pathParam:"style=simple,explode=false,name=BundleSid"`
	Sid       string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteItemAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteItemAssignmentRequest struct {
	ServerURL  *string
	PathParams DeleteItemAssignmentPathParams
	Security   DeleteItemAssignmentSecurity
}

type DeleteItemAssignmentResponse struct {
	ContentType string
	StatusCode  int64
}
