package operations

import (
	"openapi/pkg/models/shared"
)

var CreateBundleCopyServerList = []string{
	"https://numbers.twilio.com",
}

type CreateBundleCopyPathParams struct {
	BundleSid string `pathParam:"style=simple,explode=false,name=BundleSid"`
}

type CreateBundleCopyCreateBundleCopyRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
}

type CreateBundleCopySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateBundleCopyRequest struct {
	ServerURL  *string
	PathParams CreateBundleCopyPathParams
	Request    *CreateBundleCopyCreateBundleCopyRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateBundleCopySecurity
}

type CreateBundleCopyResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	NumbersV2RegulatoryComplianceBundleBundleCopy *shared.NumbersV2RegulatoryComplianceBundleBundleCopy
}
