package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvestmentProductCategoryIDEnum string

const (
	GetInvestmentProductCategoryIDEnumFunds GetInvestmentProductCategoryIDEnum = "funds"
)

type GetInvestmentProductPathParams struct {
	CategoryID          GetInvestmentProductCategoryIDEnum `pathParam:"style=simple,explode=false,name=category_id"`
	InvestmentProductID string                             `pathParam:"style=simple,explode=false,name=investment_product_id"`
}

type GetInvestmentProductHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetInvestmentProductSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetInvestmentProductRequest struct {
	PathParams GetInvestmentProductPathParams
	Headers    GetInvestmentProductHeaders
	Security   GetInvestmentProductSecurity
}

type GetInvestmentProductResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetInvestmentProduct200ApplicationJSONAny *interface{}
	GetInvestmentProduct401ApplicationJSONAny *interface{}
	GetInvestmentProduct403ApplicationJSONAny *interface{}
	GetInvestmentProduct404ApplicationJSONAny *interface{}
	GetInvestmentProduct429ApplicationJSONAny *interface{}
	GetInvestmentProduct500ApplicationJSONAny *interface{}
}
