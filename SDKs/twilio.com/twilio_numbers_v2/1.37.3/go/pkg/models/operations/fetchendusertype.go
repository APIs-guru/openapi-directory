package operations

import (
	"openapi/pkg/models/shared"
)

var FetchEndUserTypeServerList = []string{
	"https://numbers.twilio.com",
}

type FetchEndUserTypePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchEndUserTypeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchEndUserTypeRequest struct {
	ServerURL  *string
	PathParams FetchEndUserTypePathParams
	Security   FetchEndUserTypeSecurity
}

type FetchEndUserTypeResponse struct {
	ContentType                              string
	StatusCode                               int64
	NumbersV2RegulatoryComplianceEndUserType *shared.NumbersV2RegulatoryComplianceEndUserType
}
