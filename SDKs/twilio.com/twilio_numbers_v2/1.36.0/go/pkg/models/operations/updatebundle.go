package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateBundleServers = []string{
	"https://numbers.twilio.com",
}

type UpdateBundlePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateBundleUpdateBundleRequest struct {
	Email          *string                      `form:"name=Email"`
	FriendlyName   *string                      `form:"name=FriendlyName"`
	Status         *shared.BundleEnumStatusEnum `form:"name=Status"`
	StatusCallback *string                      `form:"name=StatusCallback"`
}

type UpdateBundleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateBundleRequest struct {
	ServerURL  *string
	PathParams UpdateBundlePathParams
	Request    *UpdateBundleUpdateBundleRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateBundleSecurity
}

type UpdateBundleResponse struct {
	ContentType                         string
	StatusCode                          int64
	NumbersV2RegulatoryComplianceBundle *shared.NumbersV2RegulatoryComplianceBundle
}
