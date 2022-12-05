package operations

import (
	"openapi/pkg/models/shared"
)

type GetConfiguredInvestmentProductsStatusEnum string

const (
	GetConfiguredInvestmentProductsStatusEnumActive   GetConfiguredInvestmentProductsStatusEnum = "active"
	GetConfiguredInvestmentProductsStatusEnumInactive GetConfiguredInvestmentProductsStatusEnum = "inactive"
)

type GetConfiguredInvestmentProductsQueryParams struct {
	PageNumber *string                                    `queryParam:"style=form,explode=true,name=page_number"`
	PageSize   *string                                    `queryParam:"style=form,explode=true,name=page_size"`
	Status     *GetConfiguredInvestmentProductsStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type GetConfiguredInvestmentProductsHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetConfiguredInvestmentProductsSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetConfiguredInvestmentProducts200ApplicationJSON struct {
	InvestmentProducts []interface{} `json:"investment_products"`
	NextPageAvailable  bool          `json:"next_page_available"`
}

type GetConfiguredInvestmentProductsRequest struct {
	QueryParams GetConfiguredInvestmentProductsQueryParams
	Headers     GetConfiguredInvestmentProductsHeaders
	Security    GetConfiguredInvestmentProductsSecurity
}

type GetConfiguredInvestmentProductsResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	GetConfiguredInvestmentProducts200ApplicationJSONObject *GetConfiguredInvestmentProducts200ApplicationJSON
	GetConfiguredInvestmentProducts401ApplicationJSONAny    *interface{}
	GetConfiguredInvestmentProducts403ApplicationJSONAny    *interface{}
	GetConfiguredInvestmentProducts404ApplicationJSONAny    *interface{}
	GetConfiguredInvestmentProducts429ApplicationJSONAny    *interface{}
	GetConfiguredInvestmentProducts500ApplicationJSONAny    *interface{}
}
