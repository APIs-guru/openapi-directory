package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateInvestorPathParams struct {
	InvestorID string `pathParam:"style=simple,explode=false,name=investor_id"`
}

type UpdateInvestorHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type UpdateInvestorSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateInvestorRequest struct {
	PathParams UpdateInvestorPathParams
	Headers    UpdateInvestorHeaders
	Request    interface{} `request:"mediaType=application/json"`
	Security   UpdateInvestorSecurity
}

type UpdateInvestorResponse struct {
	ContentType                         string
	RootTypeForInvestor                 *interface{}
	StatusCode                          int64
	UpdateInvestor400ApplicationJSONAny *interface{}
	UpdateInvestor401ApplicationJSONAny *interface{}
	UpdateInvestor403ApplicationJSONAny *interface{}
	UpdateInvestor404ApplicationJSONAny *interface{}
	UpdateInvestor409ApplicationJSONAny *interface{}
	UpdateInvestor429ApplicationJSONAny *interface{}
	UpdateInvestor500ApplicationJSONAny *interface{}
}
