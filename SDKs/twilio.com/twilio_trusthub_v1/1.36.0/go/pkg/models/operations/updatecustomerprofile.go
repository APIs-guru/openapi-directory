package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateCustomerProfileServers = []string{
	"https://trusthub.twilio.com",
}

type UpdateCustomerProfilePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateCustomerProfileUpdateCustomerProfileRequest struct {
	Email          *string                               `form:"name=Email"`
	FriendlyName   *string                               `form:"name=FriendlyName"`
	Status         *shared.CustomerProfileEnumStatusEnum `form:"name=Status"`
	StatusCallback *string                               `form:"name=StatusCallback"`
}

type UpdateCustomerProfileSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateCustomerProfileRequest struct {
	ServerURL  *string
	PathParams UpdateCustomerProfilePathParams
	Request    *UpdateCustomerProfileUpdateCustomerProfileRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateCustomerProfileSecurity
}

type UpdateCustomerProfileResponse struct {
	ContentType               string
	StatusCode                int64
	TrusthubV1CustomerProfile *shared.TrusthubV1CustomerProfile
}
