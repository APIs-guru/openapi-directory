package operations

import (
	"openapi/pkg/models/shared"
)

var FetchCustomerProfileChannelEndpointAssignmentServers = []string{
	"https://trusthub.twilio.com",
}

type FetchCustomerProfileChannelEndpointAssignmentPathParams struct {
	CustomerProfileSid string `pathParam:"style=simple,explode=false,name=CustomerProfileSid"`
	Sid                string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchCustomerProfileChannelEndpointAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchCustomerProfileChannelEndpointAssignmentRequest struct {
	ServerURL  *string
	PathParams FetchCustomerProfileChannelEndpointAssignmentPathParams
	Security   FetchCustomerProfileChannelEndpointAssignmentSecurity
}

type FetchCustomerProfileChannelEndpointAssignmentResponse struct {
	ContentType                                                       string
	StatusCode                                                        int64
	TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment *shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment
}
