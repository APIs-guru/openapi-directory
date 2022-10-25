package operations

import (
	"openapi/pkg/models/shared"
)

var CreateCustomerProfileChannelEndpointAssignmentServers = []string{
	"https://trusthub.twilio.com",
}

type CreateCustomerProfileChannelEndpointAssignmentPathParams struct {
	CustomerProfileSid string `pathParam:"style=simple,explode=false,name=CustomerProfileSid"`
}

type CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest struct {
	ChannelEndpointSid  string `form:"name=ChannelEndpointSid"`
	ChannelEndpointType string `form:"name=ChannelEndpointType"`
}

type CreateCustomerProfileChannelEndpointAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCustomerProfileChannelEndpointAssignmentRequest struct {
	ServerURL  *string
	PathParams CreateCustomerProfileChannelEndpointAssignmentPathParams
	Request    *CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateCustomerProfileChannelEndpointAssignmentSecurity
}

type CreateCustomerProfileChannelEndpointAssignmentResponse struct {
	ContentType                                                       string
	StatusCode                                                        int64
	TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment *shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment
}
