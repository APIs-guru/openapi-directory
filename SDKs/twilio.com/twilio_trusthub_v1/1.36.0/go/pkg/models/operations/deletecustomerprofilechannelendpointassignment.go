package operations

import (
"openapi/pkg/models/shared")
var DeleteCustomerProfileChannelEndpointAssignmentServers = []string{
	"https://trusthub.twilio.com",
}

type DeleteCustomerProfileChannelEndpointAssignmentPathParams struct {
    CustomerProfileSid string `pathParam:"style=simple,explode=false,name=CustomerProfileSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteCustomerProfileChannelEndpointAssignmentSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteCustomerProfileChannelEndpointAssignmentRequest struct {
    ServerURL *string 
    PathParams DeleteCustomerProfileChannelEndpointAssignmentPathParams 
    Security DeleteCustomerProfileChannelEndpointAssignmentSecurity 
    
}

type DeleteCustomerProfileChannelEndpointAssignmentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

