package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteAssetServers = []string{
	"https://serverless.twilio.com",
}

type DeleteAssetPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteAssetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteAssetRequest struct {
	ServerURL  *string
	PathParams DeleteAssetPathParams
	Security   DeleteAssetSecurity
}

type DeleteAssetResponse struct {
	ContentType string
	StatusCode  int64
}
