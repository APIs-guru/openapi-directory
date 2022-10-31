package operations

import (
	"openapi/pkg/models/shared"
)

var FetchTrustedCommsCurrentCallServers = []string{
	"https://preview.twilio.com",
}

type FetchTrustedCommsCurrentCallHeaders struct {
	XXcnamSensitivePhoneNumberFrom *string `header:"style=simple,explode=false,name=X-Xcnam-Sensitive-Phone-Number-From"`
	XXcnamSensitivePhoneNumberTo   *string `header:"style=simple,explode=false,name=X-Xcnam-Sensitive-Phone-Number-To"`
}

type FetchTrustedCommsCurrentCallSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTrustedCommsCurrentCallRequest struct {
	ServerURL *string
	Headers   FetchTrustedCommsCurrentCallHeaders
	Security  FetchTrustedCommsCurrentCallSecurity
}

type FetchTrustedCommsCurrentCallResponse struct {
	ContentType                    string
	StatusCode                     int64
	PreviewTrustedCommsCurrentCall *shared.PreviewTrustedCommsCurrentCall
}
