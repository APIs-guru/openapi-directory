package operations

import (
	"openapi/pkg/models/shared"
)

type GetPotPaymentsPathParams struct {
	PotID string `pathParam:"style=simple,explode=false,name=pot_id"`
}

type GetPotPaymentsQueryParams struct {
	PageNumber      *string `queryParam:"style=form,explode=true,name=page_number"`
	PageSize        *string `queryParam:"style=form,explode=true,name=page_size"`
	PaymentType     *string `queryParam:"style=form,explode=true,name=payment_type"`
	Purpose         *string `queryParam:"style=form,explode=true,name=purpose"`
	ServiceProvider *string `queryParam:"style=form,explode=true,name=service_provider"`
}

type GetPotPaymentsHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetPotPaymentsSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetPotPayments200ApplicationJSON struct {
	NextPageAvailable bool          `json:"next_page_available"`
	Payments          []interface{} `json:"payments"`
	PotID             string        `json:"pot_id"`
}

type GetPotPaymentsRequest struct {
	PathParams  GetPotPaymentsPathParams
	QueryParams GetPotPaymentsQueryParams
	Headers     GetPotPaymentsHeaders
	Security    GetPotPaymentsSecurity
}

type GetPotPaymentsResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetPotPayments200ApplicationJSONObject *GetPotPayments200ApplicationJSON
	GetPotPayments401ApplicationJSONAny    *interface{}
	GetPotPayments403ApplicationJSONAny    *interface{}
	GetPotPayments404ApplicationJSONAny    *interface{}
	GetPotPayments429ApplicationJSONAny    *interface{}
	GetPotPayments500ApplicationJSONAny    *interface{}
}
