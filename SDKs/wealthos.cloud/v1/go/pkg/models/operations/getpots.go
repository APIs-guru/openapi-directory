package operations

import (
	"openapi/pkg/models/shared"
)

type GetPotsPathParams struct {
	InvestorID string `pathParam:"style=simple,explode=false,name=investor_id"`
}

type GetPotsQueryParams struct {
	FinancialProductID *string `queryParam:"style=form,explode=true,name=financial_product_id"`
}

type GetPotsHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetPotsSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

// GetPots200ApplicationJSON
// Array of all active investment pots created by the investor
type GetPots200ApplicationJSON struct {
	Pots []interface{} `json:"pots"`
}

type GetPotsRequest struct {
	PathParams  GetPotsPathParams
	QueryParams GetPotsQueryParams
	Headers     GetPotsHeaders
	Security    GetPotsSecurity
}

type GetPotsResponse struct {
	ContentType                     string
	StatusCode                      int64
	GetPots200ApplicationJSONObject *GetPots200ApplicationJSON
	GetPots400ApplicationJSONAny    *interface{}
	GetPots401ApplicationJSONAny    *interface{}
	GetPots403ApplicationJSONAny    *interface{}
	GetPots404ApplicationJSONAny    *interface{}
	GetPots429ApplicationJSONAny    *interface{}
	GetPots500ApplicationJSONAny    *interface{}
}
