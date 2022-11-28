package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateEndUserServerList = []string{
	"https://numbers.twilio.com",
}

type UpdateEndUserPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateEndUserUpdateEndUserRequest struct {
	Attributes   *interface{} `form:"name=Attributes"`
	FriendlyName *string      `form:"name=FriendlyName"`
}

type UpdateEndUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateEndUserRequest struct {
	ServerURL  *string
	PathParams UpdateEndUserPathParams
	Request    *UpdateEndUserUpdateEndUserRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateEndUserSecurity
}

type UpdateEndUserResponse struct {
	ContentType                          string
	StatusCode                           int64
	NumbersV2RegulatoryComplianceEndUser *shared.NumbersV2RegulatoryComplianceEndUser
}
