package operations

import (
	"openapi/pkg/models/shared"
)

type GetPortfolioTemplatePathParams struct {
	PortfolioTemplateID string `pathParam:"style=simple,explode=false,name=portfolio_template_id"`
}

type GetPortfolioTemplateHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetPortfolioTemplateSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetPortfolioTemplateRequest struct {
	PathParams GetPortfolioTemplatePathParams
	Headers    GetPortfolioTemplateHeaders
	Security   GetPortfolioTemplateSecurity
}

type GetPortfolioTemplateResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetPortfolioTemplate200ApplicationJSONAny *interface{}
	GetPortfolioTemplate401ApplicationJSONAny *interface{}
	GetPortfolioTemplate403ApplicationJSONAny *interface{}
	GetPortfolioTemplate404ApplicationJSONAny *interface{}
	GetPortfolioTemplate429ApplicationJSONAny *interface{}
	GetPortfolioTemplate500ApplicationJSONAny *interface{}
}
