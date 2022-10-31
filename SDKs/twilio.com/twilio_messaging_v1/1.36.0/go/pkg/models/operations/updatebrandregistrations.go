package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateBrandRegistrationsServers = []string{
	"https://messaging.twilio.com",
}

type UpdateBrandRegistrationsPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateBrandRegistrationsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateBrandRegistrationsRequest struct {
	ServerURL  *string
	PathParams UpdateBrandRegistrationsPathParams
	Security   UpdateBrandRegistrationsSecurity
}

type UpdateBrandRegistrationsResponse struct {
	ContentType                   string
	StatusCode                    int64
	MessagingV1BrandRegistrations *shared.MessagingV1BrandRegistrations
}
