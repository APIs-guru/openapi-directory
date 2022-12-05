package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvestmentProductPriceCategoryIDEnum string

const (
	GetInvestmentProductPriceCategoryIDEnumFunds GetInvestmentProductPriceCategoryIDEnum = "funds"
)

type GetInvestmentProductPricePathParams struct {
	CategoryID          GetInvestmentProductPriceCategoryIDEnum `pathParam:"style=simple,explode=false,name=category_id"`
	InvestmentProductID string                                  `pathParam:"style=simple,explode=false,name=investment_product_id"`
}

type GetInvestmentProductPriceHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetInvestmentProductPriceSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetInvestmentProductPriceRequest struct {
	PathParams GetInvestmentProductPricePathParams
	Headers    GetInvestmentProductPriceHeaders
	Security   GetInvestmentProductPriceSecurity
}

type GetInvestmentProductPriceResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetInvestmentProductPrice200ApplicationJSONAny *interface{}
	GetInvestmentProductPrice401ApplicationJSONAny *interface{}
	GetInvestmentProductPrice403ApplicationJSONAny *interface{}
	GetInvestmentProductPrice404ApplicationJSONAny *interface{}
	GetInvestmentProductPrice429ApplicationJSONAny *interface{}
	GetInvestmentProductPrice500ApplicationJSONAny *interface{}
}
