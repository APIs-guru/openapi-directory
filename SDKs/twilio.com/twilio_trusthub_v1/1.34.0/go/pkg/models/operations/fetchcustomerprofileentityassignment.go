package operations

import (
	"openapi/pkg/models/shared"
)

var FetchCustomerProfileEntityAssignmentServers = []string{
	"https://trusthub.twilio.com",
}

type FetchCustomerProfileEntityAssignmentPathParams struct {
	CustomerProfileSid string `pathParam:"style=simple,explode=false,name=CustomerProfileSid"`
	Sid                string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchCustomerProfileEntityAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchCustomerProfileEntityAssignmentRequest struct {
	ServerURL  *string
	PathParams FetchCustomerProfileEntityAssignmentPathParams
	Security   FetchCustomerProfileEntityAssignmentSecurity
}

type FetchCustomerProfileEntityAssignmentResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	TrusthubV1CustomerProfileCustomerProfileEntityAssignment *shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment
}
