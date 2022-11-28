package operations

import (
	"openapi/pkg/models/shared"
)

var CreateCustomerProfileEntityAssignmentServerList = []string{
	"https://trusthub.twilio.com",
}

type CreateCustomerProfileEntityAssignmentPathParams struct {
	CustomerProfileSid string `pathParam:"style=simple,explode=false,name=CustomerProfileSid"`
}

type CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest struct {
	ObjectSid string `form:"name=ObjectSid"`
}

type CreateCustomerProfileEntityAssignmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCustomerProfileEntityAssignmentRequest struct {
	ServerURL  *string
	PathParams CreateCustomerProfileEntityAssignmentPathParams
	Request    *CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateCustomerProfileEntityAssignmentSecurity
}

type CreateCustomerProfileEntityAssignmentResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	TrusthubV1CustomerProfileCustomerProfileEntityAssignment *shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment
}
