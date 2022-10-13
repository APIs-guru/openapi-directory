package operations

import (
	"openapi/pkg/models/shared"
)

var CreateTrustedCommsChannelServers = []string{
	"https://preview.twilio.com",
}

type CreateTrustedCommsChannelPathParams struct {
	BrandedChannelSid string `pathParam:"style=simple,explode=false,name=BrandedChannelSid"`
}

type CreateTrustedCommsChannelRequestBodyCreateTrustedCommsChannelRequest struct {
	PhoneNumberSid string `form:"name=PhoneNumberSid"`
}

type CreateTrustedCommsChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateTrustedCommsChannelRequest struct {
	ServerURL  *string
	PathParams CreateTrustedCommsChannelPathParams
	Request    *CreateTrustedCommsChannelRequestBodyCreateTrustedCommsChannelRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateTrustedCommsChannelSecurity
}

type CreateTrustedCommsChannelResponse struct {
	ContentType                              string
	StatusCode                               int64
	PreviewTrustedCommsBrandedChannelChannel *shared.PreviewTrustedCommsBrandedChannelChannel
}
