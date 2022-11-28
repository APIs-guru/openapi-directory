package operations

import (
	"openapi/pkg/models/shared"
)

var CreateCustomerProfileServerList = []string{
	"https://trusthub.twilio.com",
}

type CreateCustomerProfileCreateCustomerProfileRequest struct {
	Email          string  `form:"name=Email"`
	FriendlyName   string  `form:"name=FriendlyName"`
	PolicySid      string  `form:"name=PolicySid"`
	StatusCallback *string `form:"name=StatusCallback"`
}

type CreateCustomerProfileSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCustomerProfileRequest struct {
	ServerURL *string
	Request   *CreateCustomerProfileCreateCustomerProfileRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateCustomerProfileSecurity
}

type CreateCustomerProfileResponse struct {
	ContentType               string
	StatusCode                int64
	TrusthubV1CustomerProfile *shared.TrusthubV1CustomerProfile
}
