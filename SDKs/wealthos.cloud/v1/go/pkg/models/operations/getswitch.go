package operations

import (
	"openapi/pkg/models/shared"
)

type GetSwitchPathParams struct {
	SwitchTransactionID string `pathParam:"style=simple,explode=false,name=switch_transaction_id"`
}

type GetSwitchQueryParams struct {
	IncludeDetails *bool `queryParam:"style=form,explode=true,name=include_details"`
}

type GetSwitchHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetSwitchSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetSwitchRequest struct {
	PathParams  GetSwitchPathParams
	QueryParams GetSwitchQueryParams
	Headers     GetSwitchHeaders
	Security    GetSwitchSecurity
}

type GetSwitchResponse struct {
	ContentType                    string
	StatusCode                     int64
	GetSwitch200ApplicationJSONAny *interface{}
	GetSwitch400ApplicationJSONAny *interface{}
	GetSwitch401ApplicationJSONAny *interface{}
	GetSwitch403ApplicationJSONAny *interface{}
	GetSwitch404ApplicationJSONAny *interface{}
	GetSwitch409ApplicationJSONAny *interface{}
	GetSwitch429ApplicationJSONAny *interface{}
	GetSwitch500ApplicationJSONAny *interface{}
}
