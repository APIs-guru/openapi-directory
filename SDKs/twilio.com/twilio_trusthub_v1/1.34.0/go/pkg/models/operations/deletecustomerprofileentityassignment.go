package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteCustomerProfileEntityAssignmentServers = []string{
	"https://trusthub.twilio.com",
}

type DeleteCustomerProfileEntityAssignmentPathParams struct {
	CustomerProfileSid string `pathParam:"style=simple,explode=false,name=CustomerProfileSid"`
	Sid                string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteCustomerProfileEntityAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteCustomerProfileEntityAssignmentRequest struct {
	ServerURL  *string
	PathParams DeleteCustomerProfileEntityAssignmentPathParams
	Security   DeleteCustomerProfileEntityAssignmentSecurity
}

type DeleteCustomerProfileEntityAssignmentResponse struct {
	ContentType string
	StatusCode  int64
}
