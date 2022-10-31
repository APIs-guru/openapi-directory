package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptChangeRequestPathParams struct {
	ChangeRequestID int64 `pathParam:"style=simple,explode=false,name=changeRequestId"`
}

type AcceptChangeRequestRequestBodyStatusEnum string

const (
	AcceptChangeRequestRequestBodyStatusEnumPendingDeployment AcceptChangeRequestRequestBodyStatusEnum = "pending deployment"
	AcceptChangeRequestRequestBodyStatusEnumDeployed          AcceptChangeRequestRequestBodyStatusEnum = "deployed"
)

type AcceptChangeRequestRequestBody struct {
	Status *AcceptChangeRequestRequestBodyStatusEnum `json:"status,omitempty"`
}

type AcceptChangeRequestRequest struct {
	PathParams AcceptChangeRequestPathParams
	Request    AcceptChangeRequestRequestBody `request:"mediaType=application/json"`
}

type AcceptChangeRequest200ApplicationJSONActionEnum string

const (
	AcceptChangeRequest200ApplicationJSONActionEnumAcceptChangeRequest AcceptChangeRequest200ApplicationJSONActionEnum = "acceptChangeRequest"
)

type AcceptChangeRequest200ApplicationJSONData struct {
	Rules []shared.ChangeRequest `json:"rules"`
}

type AcceptChangeRequest200ApplicationJSONResultEnum string

const (
	AcceptChangeRequest200ApplicationJSONResultEnumSuccess AcceptChangeRequest200ApplicationJSONResultEnum = "success"
	AcceptChangeRequest200ApplicationJSONResultEnumError   AcceptChangeRequest200ApplicationJSONResultEnum = "error"
)

type AcceptChangeRequest200ApplicationJSON struct {
	Action AcceptChangeRequest200ApplicationJSONActionEnum `json:"action"`
	Data   AcceptChangeRequest200ApplicationJSONData       `json:"data"`
	Result AcceptChangeRequest200ApplicationJSONResultEnum `json:"result"`
}

type AcceptChangeRequestResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	AcceptChangeRequest200ApplicationJSONObject *AcceptChangeRequest200ApplicationJSON
}
