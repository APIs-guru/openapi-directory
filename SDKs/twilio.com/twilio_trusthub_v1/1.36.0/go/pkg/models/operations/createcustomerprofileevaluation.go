package operations

import (
	"openapi/pkg/models/shared"
)

var CreateCustomerProfileEvaluationServers = []string{
	"https://trusthub.twilio.com",
}

type CreateCustomerProfileEvaluationPathParams struct {
	CustomerProfileSid string `pathParam:"style=simple,explode=false,name=CustomerProfileSid"`
}

type CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest struct {
	PolicySid string `form:"name=PolicySid"`
}

type CreateCustomerProfileEvaluationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCustomerProfileEvaluationRequest struct {
	ServerURL  *string
	PathParams CreateCustomerProfileEvaluationPathParams
	Request    *CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateCustomerProfileEvaluationSecurity
}

type CreateCustomerProfileEvaluationResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	TrusthubV1CustomerProfileCustomerProfileEvaluation *shared.TrusthubV1CustomerProfileCustomerProfileEvaluation
}
