package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNodesQueryParams struct {
	NodeParameters []shared.NodeAdd `queryParam:"serialization=json,name=Node parameters"`
}

type CreateNodesRequest struct {
	QueryParams CreateNodesQueryParams
}

type CreateNodes200ApplicationJSONActionEnum string

const (
	CreateNodes200ApplicationJSONActionEnumCreateNodes CreateNodes200ApplicationJSONActionEnum = "createNodes"
)

type CreateNodes200ApplicationJSONData struct {
	Created []string `json:"created"`
	Failed  []string `json:"failed"`
}

type CreateNodes200ApplicationJSONResultEnum string

const (
	CreateNodes200ApplicationJSONResultEnumSuccess CreateNodes200ApplicationJSONResultEnum = "success"
	CreateNodes200ApplicationJSONResultEnumError   CreateNodes200ApplicationJSONResultEnum = "error"
)

type CreateNodes200ApplicationJSON struct {
	Action CreateNodes200ApplicationJSONActionEnum `json:"action"`
	Data   CreateNodes200ApplicationJSONData       `json:"data"`
	Result CreateNodes200ApplicationJSONResultEnum `json:"result"`
}

type CreateNodesResponse struct {
	ContentType                         string
	StatusCode                          int64
	CreateNodes200ApplicationJSONObject *CreateNodes200ApplicationJSON
}
