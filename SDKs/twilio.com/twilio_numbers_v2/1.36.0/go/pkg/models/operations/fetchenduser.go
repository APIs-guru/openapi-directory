package operations

import (
	"openapi/pkg/models/shared"
)

var FetchEndUserServers = []string{
	"https://numbers.twilio.com",
}

type FetchEndUserPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchEndUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchEndUserRequest struct {
	ServerURL  *string
	PathParams FetchEndUserPathParams
	Security   FetchEndUserSecurity
}

type FetchEndUserResponse struct {
	ContentType                          string
	StatusCode                           int64
	NumbersV2RegulatoryComplianceEndUser *shared.NumbersV2RegulatoryComplianceEndUser
}
