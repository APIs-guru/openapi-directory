package operations

import (
	"openapi/pkg/models/shared"
)

var FetchCustomerProfileEvaluationServers = []string{
	"https://trusthub.twilio.com",
}

type FetchCustomerProfileEvaluationPathParams struct {
	CustomerProfileSid string `pathParam:"style=simple,explode=false,name=CustomerProfileSid"`
	Sid                string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchCustomerProfileEvaluationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchCustomerProfileEvaluationRequest struct {
	ServerURL  *string
	PathParams FetchCustomerProfileEvaluationPathParams
	Security   FetchCustomerProfileEvaluationSecurity
}

type FetchCustomerProfileEvaluationResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	TrusthubV1CustomerProfileCustomerProfileEvaluation *shared.TrusthubV1CustomerProfileCustomerProfileEvaluation
}
