package operations

import (
	"openapi/pkg/models/shared"
)

var FetchUserInfoServerList = []string{
	"https://oauth.twilio.com",
}

type FetchUserInfoSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchUserInfoRequest struct {
	ServerURL *string
	Security  FetchUserInfoSecurity
}

type FetchUserInfoResponse struct {
	ContentType     string
	StatusCode      int64
	OauthV1UserInfo *shared.OauthV1UserInfo
}
