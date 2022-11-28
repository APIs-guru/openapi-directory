package operations

import (
	"openapi/pkg/models/shared"
)

var FetchBrandRegistrationsServerList = []string{
	"https://messaging.twilio.com",
}

type FetchBrandRegistrationsPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchBrandRegistrationsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchBrandRegistrationsRequest struct {
	ServerURL  *string
	PathParams FetchBrandRegistrationsPathParams
	Security   FetchBrandRegistrationsSecurity
}

type FetchBrandRegistrationsResponse struct {
	ContentType                   string
	StatusCode                    int64
	MessagingV1BrandRegistrations *shared.MessagingV1BrandRegistrations
}
