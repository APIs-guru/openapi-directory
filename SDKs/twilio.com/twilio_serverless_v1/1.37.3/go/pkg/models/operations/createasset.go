package operations

import (
	"openapi/pkg/models/shared"
)

var CreateAssetServerList = []string{
	"https://serverless.twilio.com",
}

type CreateAssetPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateAssetCreateAssetRequest struct {
	FriendlyName string `form:"name=FriendlyName"`
}

type CreateAssetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateAssetRequest struct {
	ServerURL  *string
	PathParams CreateAssetPathParams
	Request    *CreateAssetCreateAssetRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateAssetSecurity
}

type CreateAssetResponse struct {
	ContentType              string
	StatusCode               int64
	ServerlessV1ServiceAsset *shared.ServerlessV1ServiceAsset
}
