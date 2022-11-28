package operations

import (
	"openapi/pkg/models/shared"
)

var FetchTrustedCommsBrandsInformationServerList = []string{
	"https://preview.twilio.com",
}

type FetchTrustedCommsBrandsInformationHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type FetchTrustedCommsBrandsInformationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTrustedCommsBrandsInformationRequest struct {
	ServerURL *string
	Headers   FetchTrustedCommsBrandsInformationHeaders
	Security  FetchTrustedCommsBrandsInformationSecurity
}

type FetchTrustedCommsBrandsInformationResponse struct {
	ContentType                          string
	StatusCode                           int64
	PreviewTrustedCommsBrandsInformation *shared.PreviewTrustedCommsBrandsInformation
}
