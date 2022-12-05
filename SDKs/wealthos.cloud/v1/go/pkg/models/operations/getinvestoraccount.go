package operations

import (
	"openapi/pkg/models/shared"
)

type GetinvestorAccountPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=account_id"`
}

type GetinvestorAccountHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetinvestorAccountSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetinvestorAccountRequest struct {
	PathParams GetinvestorAccountPathParams
	Headers    GetinvestorAccountHeaders
	Security   GetinvestorAccountSecurity
}

type GetinvestorAccountResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetinvestorAccount200ApplicationJSONAny *interface{}
	GetinvestorAccount400ApplicationJSONAny *interface{}
	GetinvestorAccount401ApplicationJSONAny *interface{}
	GetinvestorAccount403ApplicationJSONAny *interface{}
	GetinvestorAccount404ApplicationJSONAny *interface{}
	GetinvestorAccount409ApplicationJSONAny *interface{}
	GetinvestorAccount429ApplicationJSONAny *interface{}
	GetinvestorAccount500ApplicationJSONAny *interface{}
}
