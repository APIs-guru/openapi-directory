package operations

import (
	"openapi/pkg/models/shared"
)

var FetchAssetServers = []string{
	"https://serverless.twilio.com",
}

type FetchAssetPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchAssetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchAssetRequest struct {
	ServerURL  *string
	PathParams FetchAssetPathParams
	Security   FetchAssetSecurity
}

type FetchAssetResponse struct {
	ContentType              string
	StatusCode               int64
	ServerlessV1ServiceAsset *shared.ServerlessV1ServiceAsset
}
