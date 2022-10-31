package operations

import (
	"openapi/pkg/models/shared"
)

var CreateTrustProductEntityAssignmentServers = []string{
	"https://trusthub.twilio.com",
}

type CreateTrustProductEntityAssignmentPathParams struct {
	TrustProductSid string `pathParam:"style=simple,explode=false,name=TrustProductSid"`
}

type CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest struct {
	ObjectSid string `form:"name=ObjectSid"`
}

type CreateTrustProductEntityAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateTrustProductEntityAssignmentRequest struct {
	ServerURL  *string
	PathParams CreateTrustProductEntityAssignmentPathParams
	Request    *CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateTrustProductEntityAssignmentSecurity
}

type CreateTrustProductEntityAssignmentResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	TrusthubV1TrustProductTrustProductEntityAssignment *shared.TrusthubV1TrustProductTrustProductEntityAssignment
}
