package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateAssetServers = []string{
	"https://serverless.twilio.com",
}

type UpdateAssetPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateAssetUpdateAssetRequest struct {
	FriendlyName string `form:"name=FriendlyName"`
}

type UpdateAssetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateAssetRequest struct {
	ServerURL  *string
	PathParams UpdateAssetPathParams
	Request    *UpdateAssetUpdateAssetRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateAssetSecurity
}

type UpdateAssetResponse struct {
	ContentType              string
	StatusCode               int64
	ServerlessV1ServiceAsset *shared.ServerlessV1ServiceAsset
}
