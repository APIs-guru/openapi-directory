package operations

import (
	"openapi/pkg/models/shared"
)

var CreateTrustProductServerList = []string{
	"https://trusthub.twilio.com",
}

type CreateTrustProductCreateTrustProductRequest struct {
	Email          string  `form:"name=Email"`
	FriendlyName   string  `form:"name=FriendlyName"`
	PolicySid      string  `form:"name=PolicySid"`
	StatusCallback *string `form:"name=StatusCallback"`
}

type CreateTrustProductSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateTrustProductRequest struct {
	ServerURL *string
	Request   *CreateTrustProductCreateTrustProductRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateTrustProductSecurity
}

type CreateTrustProductResponse struct {
	ContentType            string
	StatusCode             int64
	TrusthubV1TrustProduct *shared.TrusthubV1TrustProduct
}
