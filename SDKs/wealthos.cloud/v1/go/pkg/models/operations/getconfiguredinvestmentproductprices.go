package operations

import (
	"openapi/pkg/models/shared"
)

type GetConfiguredInvestmentProductPricesStatusEnum string

const (
	GetConfiguredInvestmentProductPricesStatusEnumActive   GetConfiguredInvestmentProductPricesStatusEnum = "active"
	GetConfiguredInvestmentProductPricesStatusEnumInactive GetConfiguredInvestmentProductPricesStatusEnum = "inactive"
)

type GetConfiguredInvestmentProductPricesQueryParams struct {
	PageNumber *string                                         `queryParam:"style=form,explode=true,name=page_number"`
	PageSize   *string                                         `queryParam:"style=form,explode=true,name=page_size"`
	Status     *GetConfiguredInvestmentProductPricesStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type GetConfiguredInvestmentProductPricesHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetConfiguredInvestmentProductPricesSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetConfiguredInvestmentProductPrices200ApplicationJSON struct {
	InvestmentProductUnitPrices []interface{} `json:"investment_product_unit_prices"`
	NextPageAvailable           bool          `json:"next_page_available"`
}

type GetConfiguredInvestmentProductPricesRequest struct {
	QueryParams GetConfiguredInvestmentProductPricesQueryParams
	Headers     GetConfiguredInvestmentProductPricesHeaders
	Security    GetConfiguredInvestmentProductPricesSecurity
}

type GetConfiguredInvestmentProductPricesResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	GetConfiguredInvestmentProductPrices200ApplicationJSONObject *GetConfiguredInvestmentProductPrices200ApplicationJSON
	GetConfiguredInvestmentProductPrices401ApplicationJSONAny    *interface{}
	GetConfiguredInvestmentProductPrices403ApplicationJSONAny    *interface{}
	GetConfiguredInvestmentProductPrices404ApplicationJSONAny    *interface{}
	GetConfiguredInvestmentProductPrices429ApplicationJSONAny    *interface{}
	GetConfiguredInvestmentProductPrices500ApplicationJSONAny    *interface{}
}
