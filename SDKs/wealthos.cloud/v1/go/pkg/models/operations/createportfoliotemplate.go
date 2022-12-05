package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePortfolioTemplateHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type CreatePortfolioTemplateSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreatePortfolioTemplateRequest struct {
	Headers  CreatePortfolioTemplateHeaders
	Request  interface{} `request:"mediaType=application/json"`
	Security CreatePortfolioTemplateSecurity
}

type CreatePortfolioTemplateResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	CreatePortfolioTemplate201ApplicationJSONAny *interface{}
	CreatePortfolioTemplate400ApplicationJSONAny *interface{}
	CreatePortfolioTemplate401ApplicationJSONAny *interface{}
	CreatePortfolioTemplate403ApplicationJSONAny *interface{}
	CreatePortfolioTemplate404ApplicationJSONAny *interface{}
	CreatePortfolioTemplate429ApplicationJSONAny *interface{}
	CreatePortfolioTemplate500ApplicationJSONAny *interface{}
}
