package operations

import (
	"openapi/pkg/models/shared"
)

type GetRebalanceDetailsPathParams struct {
	RebalanceRequestID string `pathParam:"style=simple,explode=false,name=rebalance_request_id"`
}

type GetRebalanceDetailsHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetRebalanceDetailsSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRebalanceDetailsRequest struct {
	PathParams GetRebalanceDetailsPathParams
	Headers    GetRebalanceDetailsHeaders
	Security   GetRebalanceDetailsSecurity
}

type GetRebalanceDetailsResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetRebalanceDetails200ApplicationJSONAny *interface{}
	GetRebalanceDetails400ApplicationJSONAny *interface{}
	GetRebalanceDetails401ApplicationJSONAny *interface{}
	GetRebalanceDetails403ApplicationJSONAny *interface{}
	GetRebalanceDetails404ApplicationJSONAny *interface{}
	GetRebalanceDetails409ApplicationJSONAny *interface{}
	GetRebalanceDetails429ApplicationJSONAny *interface{}
	GetRebalanceDetails500ApplicationJSONAny *interface{}
}
