package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteTrustProductChannelEndpointAssignmentServers = []string{
	"https://trusthub.twilio.com",
}

type DeleteTrustProductChannelEndpointAssignmentPathParams struct {
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
	TrustProductSid string `pathParam:"style=simple,explode=false,name=TrustProductSid"`
}

type DeleteTrustProductChannelEndpointAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteTrustProductChannelEndpointAssignmentRequest struct {
	ServerURL  *string
	PathParams DeleteTrustProductChannelEndpointAssignmentPathParams
	Security   DeleteTrustProductChannelEndpointAssignmentSecurity
}

type DeleteTrustProductChannelEndpointAssignmentResponse struct {
	ContentType string
	StatusCode  int64
}
