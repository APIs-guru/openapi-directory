package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePortfolioTemplatePathParams struct {
	PortfolioTemplateID string `pathParam:"style=simple,explode=false,name=portfolio_template_id"`
}

type UpdatePortfolioTemplateHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type UpdatePortfolioTemplateSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type UpdatePortfolioTemplateRequest struct {
	PathParams UpdatePortfolioTemplatePathParams
	Headers    UpdatePortfolioTemplateHeaders
	Request    interface{} `request:"mediaType=application/json"`
	Security   UpdatePortfolioTemplateSecurity
}

type UpdatePortfolioTemplateResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	UpdatePortfolioTemplate200ApplicationJSONAny *interface{}
	UpdatePortfolioTemplate400ApplicationJSONAny *interface{}
	UpdatePortfolioTemplate401ApplicationJSONAny *interface{}
	UpdatePortfolioTemplate403ApplicationJSONAny *interface{}
	UpdatePortfolioTemplate404ApplicationJSONAny *interface{}
	UpdatePortfolioTemplate409ApplicationJSONAny *interface{}
	UpdatePortfolioTemplate429ApplicationJSONAny *interface{}
	UpdatePortfolioTemplate500ApplicationJSONAny *interface{}
}
