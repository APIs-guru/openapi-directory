package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvestorPathParams struct {
	InvestorID string `pathParam:"style=simple,explode=false,name=investor_id"`
}

type GetInvestorHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetInvestorSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetInvestorRequest struct {
	PathParams GetInvestorPathParams
	Headers    GetInvestorHeaders
	Security   GetInvestorSecurity
}

type GetInvestorResponse struct {
	ContentType                      string
	RootTypeForInvestor              *interface{}
	StatusCode                       int64
	GetInvestor400ApplicationJSONAny *interface{}
	GetInvestor401ApplicationJSONAny *interface{}
	GetInvestor403ApplicationJSONAny *interface{}
	GetInvestor404ApplicationJSONAny *interface{}
	GetInvestor429ApplicationJSONAny *interface{}
	GetInvestor500ApplicationJSONAny *interface{}
}
