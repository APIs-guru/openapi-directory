package operations

import (
	"openapi/pkg/models/shared"
)

var FetchTrustProductEntityAssignmentServerList = []string{
	"https://trusthub.twilio.com",
}

type FetchTrustProductEntityAssignmentPathParams struct {
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
	TrustProductSid string `pathParam:"style=simple,explode=false,name=TrustProductSid"`
}

type FetchTrustProductEntityAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTrustProductEntityAssignmentRequest struct {
	ServerURL  *string
	PathParams FetchTrustProductEntityAssignmentPathParams
	Security   FetchTrustProductEntityAssignmentSecurity
}

type FetchTrustProductEntityAssignmentResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	TrusthubV1TrustProductTrustProductEntityAssignment *shared.TrusthubV1TrustProductTrustProductEntityAssignment
}
