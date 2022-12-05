package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllPortfolioTemplatesHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetAllPortfolioTemplatesSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

// GetAllPortfolioTemplates200ApplicationJSON
// Array of all portfolio templates applicable to the investor
type GetAllPortfolioTemplates200ApplicationJSON struct {
	PortfolioTemplates []interface{} `json:"portfolio_templates"`
}

type GetAllPortfolioTemplatesRequest struct {
	Headers  GetAllPortfolioTemplatesHeaders
	Security GetAllPortfolioTemplatesSecurity
}

type GetAllPortfolioTemplatesResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	GetAllPortfolioTemplates200ApplicationJSONObject *GetAllPortfolioTemplates200ApplicationJSON
	GetAllPortfolioTemplates401ApplicationJSONAny    *interface{}
	GetAllPortfolioTemplates403ApplicationJSONAny    *interface{}
	GetAllPortfolioTemplates404ApplicationJSONAny    *interface{}
	GetAllPortfolioTemplates429ApplicationJSONAny    *interface{}
	GetAllPortfolioTemplates500ApplicationJSONAny    *interface{}
}
