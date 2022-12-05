package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllPaymentsSortEnum string

const (
	GetAllPaymentsSortEnumAsc  GetAllPaymentsSortEnum = "asc"
	GetAllPaymentsSortEnumDesc GetAllPaymentsSortEnum = "desc"
)

type GetAllPaymentsQueryParams struct {
	PageNumber      *string                 `queryParam:"style=form,explode=true,name=page_number"`
	PageSize        *string                 `queryParam:"style=form,explode=true,name=page_size"`
	PaymentType     *string                 `queryParam:"style=form,explode=true,name=payment_type"`
	Purpose         *string                 `queryParam:"style=form,explode=true,name=purpose"`
	ServiceProvider *string                 `queryParam:"style=form,explode=true,name=service_provider"`
	Sort            *GetAllPaymentsSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type GetAllPaymentsHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetAllPaymentsSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetAllPayments200ApplicationJSON struct {
	NextPageAvailable bool          `json:"next_page_available"`
	Payments          []interface{} `json:"payments"`
}

type GetAllPaymentsRequest struct {
	QueryParams GetAllPaymentsQueryParams
	Headers     GetAllPaymentsHeaders
	Security    GetAllPaymentsSecurity
}

type GetAllPaymentsResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetAllPayments200ApplicationJSONObject *GetAllPayments200ApplicationJSON
	GetAllPayments400ApplicationJSONAny    *interface{}
	GetAllPayments401ApplicationJSONAny    *interface{}
	GetAllPayments403ApplicationJSONAny    *interface{}
	GetAllPayments404ApplicationJSONAny    *interface{}
	GetAllPayments429ApplicationJSONAny    *interface{}
	GetAllPayments500ApplicationJSONAny    *interface{}
}
