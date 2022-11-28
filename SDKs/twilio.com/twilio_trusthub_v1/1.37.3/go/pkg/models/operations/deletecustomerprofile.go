package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteCustomerProfileServerList = []string{
	"https://trusthub.twilio.com",
}

type DeleteCustomerProfilePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteCustomerProfileSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteCustomerProfileRequest struct {
	ServerURL  *string
	PathParams DeleteCustomerProfilePathParams
	Security   DeleteCustomerProfileSecurity
}

type DeleteCustomerProfileResponse struct {
	ContentType string
	StatusCode  int64
}
