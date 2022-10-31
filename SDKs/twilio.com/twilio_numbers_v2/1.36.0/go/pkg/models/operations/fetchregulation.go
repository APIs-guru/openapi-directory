package operations

import (
	"openapi/pkg/models/shared"
)

var FetchRegulationServers = []string{
	"https://numbers.twilio.com",
}

type FetchRegulationPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchRegulationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchRegulationRequest struct {
	ServerURL  *string
	PathParams FetchRegulationPathParams
	Security   FetchRegulationSecurity
}

type FetchRegulationResponse struct {
	ContentType                             string
	StatusCode                              int64
	NumbersV2RegulatoryComplianceRegulation *shared.NumbersV2RegulatoryComplianceRegulation
}
