package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteTrustProductEntityAssignmentServers = []string{
	"https://trusthub.twilio.com",
}

type DeleteTrustProductEntityAssignmentPathParams struct {
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
	TrustProductSid string `pathParam:"style=simple,explode=false,name=TrustProductSid"`
}

type DeleteTrustProductEntityAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteTrustProductEntityAssignmentRequest struct {
	ServerURL  *string
	PathParams DeleteTrustProductEntityAssignmentPathParams
	Security   DeleteTrustProductEntityAssignmentSecurity
}

type DeleteTrustProductEntityAssignmentResponse struct {
	ContentType string
	StatusCode  int64
}
