package operations

import (
	"openapi/pkg/models/shared"
)

var CreateBrandVettingServerList = []string{
	"https://messaging.twilio.com",
}

type CreateBrandVettingPathParams struct {
	BrandSid string `pathParam:"style=simple,explode=false,name=BrandSid"`
}

type CreateBrandVettingCreateBrandVettingRequest struct {
	VettingID       *string                                    `form:"name=VettingId"`
	VettingProvider shared.BrandVettingEnumVettingProviderEnum `form:"name=VettingProvider"`
}

type CreateBrandVettingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateBrandVettingRequest struct {
	ServerURL  *string
	PathParams CreateBrandVettingPathParams
	Request    *CreateBrandVettingCreateBrandVettingRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateBrandVettingSecurity
}

type CreateBrandVettingResponse struct {
	ContentType                               string
	StatusCode                                int64
	MessagingV1BrandRegistrationsBrandVetting *shared.MessagingV1BrandRegistrationsBrandVetting
}
