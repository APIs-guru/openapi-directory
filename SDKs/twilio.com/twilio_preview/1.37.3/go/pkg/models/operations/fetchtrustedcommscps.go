package operations

import (
	"openapi/pkg/models/shared"
)

var FetchTrustedCommsCpsServerList = []string{
	"https://preview.twilio.com",
}

type FetchTrustedCommsCpsHeaders struct {
	XXcnamSensitivePhoneNumber *string `header:"style=simple,explode=false,name=X-Xcnam-Sensitive-Phone-Number"`
}

type FetchTrustedCommsCpsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTrustedCommsCpsRequest struct {
	ServerURL *string
	Headers   FetchTrustedCommsCpsHeaders
	Security  FetchTrustedCommsCpsSecurity
}

type FetchTrustedCommsCpsResponse struct {
	ContentType            string
	StatusCode             int64
	PreviewTrustedCommsCps *shared.PreviewTrustedCommsCps
}
