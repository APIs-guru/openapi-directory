package operations

import (
	"openapi/pkg/models/shared"
)

var FetchCustomerProfileServers = []string{
	"https://trusthub.twilio.com",
}

type FetchCustomerProfilePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchCustomerProfileSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchCustomerProfileRequest struct {
	ServerURL  *string
	PathParams FetchCustomerProfilePathParams
	Security   FetchCustomerProfileSecurity
}

type FetchCustomerProfileResponse struct {
	ContentType               string
	StatusCode                int64
	TrusthubV1CustomerProfile *shared.TrusthubV1CustomerProfile
}
