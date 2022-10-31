package operations

import (
	"openapi/pkg/models/shared"
)

var FetchBrandVettingServers = []string{
	"https://messaging.twilio.com",
}

type FetchBrandVettingPathParams struct {
	BrandSid        string `pathParam:"style=simple,explode=false,name=BrandSid"`
	BrandVettingSid string `pathParam:"style=simple,explode=false,name=BrandVettingSid"`
}

type FetchBrandVettingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchBrandVettingRequest struct {
	ServerURL  *string
	PathParams FetchBrandVettingPathParams
	Security   FetchBrandVettingSecurity
}

type FetchBrandVettingResponse struct {
	ContentType                               string
	StatusCode                                int64
	MessagingV1BrandRegistrationsBrandVetting *shared.MessagingV1BrandRegistrationsBrandVetting
}
