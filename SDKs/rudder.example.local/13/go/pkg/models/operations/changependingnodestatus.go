package operations

import (
	"openapi/pkg/models/shared"
)

type ChangePendingNodeStatusPathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
}

type ChangePendingNodeStatusRequestBodyStatusEnum string

const (
	ChangePendingNodeStatusRequestBodyStatusEnumAccepted ChangePendingNodeStatusRequestBodyStatusEnum = "accepted"
	ChangePendingNodeStatusRequestBodyStatusEnumRefused  ChangePendingNodeStatusRequestBodyStatusEnum = "refused"
)

type ChangePendingNodeStatusRequestBody struct {
	Status *ChangePendingNodeStatusRequestBodyStatusEnum `json:"status,omitempty"`
}

type ChangePendingNodeStatus200ApplicationJSONActionEnum string

const (
	ChangePendingNodeStatus200ApplicationJSONActionEnumChangePendingNodeStatus ChangePendingNodeStatus200ApplicationJSONActionEnum = "changePendingNodeStatus"
)

// ChangePendingNodeStatus200ApplicationJSONData
// Information about the node
type ChangePendingNodeStatus200ApplicationJSONData struct {
	Nodes []shared.NodeFull `json:"nodes"`
}

type ChangePendingNodeStatus200ApplicationJSONResultEnum string

const (
	ChangePendingNodeStatus200ApplicationJSONResultEnumSuccess ChangePendingNodeStatus200ApplicationJSONResultEnum = "success"
	ChangePendingNodeStatus200ApplicationJSONResultEnumError   ChangePendingNodeStatus200ApplicationJSONResultEnum = "error"
)

type ChangePendingNodeStatus200ApplicationJSON struct {
	Action ChangePendingNodeStatus200ApplicationJSONActionEnum `json:"action"`
	Data   ChangePendingNodeStatus200ApplicationJSONData       `json:"data"`
	Result ChangePendingNodeStatus200ApplicationJSONResultEnum `json:"result"`
}

type ChangePendingNodeStatusRequest struct {
	PathParams ChangePendingNodeStatusPathParams
	Request    *ChangePendingNodeStatusRequestBody `request:"mediaType=application/json"`
}

type ChangePendingNodeStatusResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	ChangePendingNodeStatus200ApplicationJSONObject *ChangePendingNodeStatus200ApplicationJSON
}
