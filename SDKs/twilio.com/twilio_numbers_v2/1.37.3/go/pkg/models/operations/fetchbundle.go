package operations

import (
	"openapi/pkg/models/shared"
)

var FetchBundleServerList = []string{
	"https://numbers.twilio.com",
}

type FetchBundlePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchBundleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchBundleRequest struct {
	ServerURL  *string
	PathParams FetchBundlePathParams
	Security   FetchBundleSecurity
}

type FetchBundleResponse struct {
	ContentType                         string
	StatusCode                          int64
	NumbersV2RegulatoryComplianceBundle *shared.NumbersV2RegulatoryComplianceBundle
}
