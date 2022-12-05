package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInvestorHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type CreateInvestorSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreateInvestorRequest struct {
	Headers  CreateInvestorHeaders
	Request  interface{} `request:"mediaType=application/json"`
	Security CreateInvestorSecurity
}

type CreateInvestorResponse struct {
	ContentType                         string
	RootTypeForInvestorCreationResponse *interface{}
	StatusCode                          int64
	CreateInvestor400ApplicationJSONAny *interface{}
	CreateInvestor401ApplicationJSONAny *interface{}
	CreateInvestor403ApplicationJSONAny *interface{}
	CreateInvestor429ApplicationJSONAny *interface{}
	CreateInvestor500ApplicationJSONAny *interface{}
}
