package operations

import (
	"openapi/pkg/models/shared"
)

type ListAcceptedNodesQueryParams struct {
	Composition *shared.NodeCompositionEnum `queryParam:"style=form,explode=true,name=composition"`
	Include     *string                     `queryParam:"style=form,explode=true,name=include"`
	Query       *shared.NodeQuery           `queryParam:"serialization=json,name=query"`
	Select      *string                     `queryParam:"style=form,explode=true,name=select"`
	Where       []shared.NodeWhere          `queryParam:"serialization=json,name=where"`
}

type ListAcceptedNodes200ApplicationJSONActionEnum string

const (
	ListAcceptedNodes200ApplicationJSONActionEnumListAcceptedNodes ListAcceptedNodes200ApplicationJSONActionEnum = "listAcceptedNodes"
)

// ListAcceptedNodes200ApplicationJSONData
// Information about the nodes
type ListAcceptedNodes200ApplicationJSONData struct {
	Nodes []shared.NodeFull `json:"nodes"`
}

type ListAcceptedNodes200ApplicationJSONResultEnum string

const (
	ListAcceptedNodes200ApplicationJSONResultEnumSuccess ListAcceptedNodes200ApplicationJSONResultEnum = "success"
	ListAcceptedNodes200ApplicationJSONResultEnumError   ListAcceptedNodes200ApplicationJSONResultEnum = "error"
)

type ListAcceptedNodes200ApplicationJSON struct {
	Action ListAcceptedNodes200ApplicationJSONActionEnum `json:"action"`
	Data   ListAcceptedNodes200ApplicationJSONData       `json:"data"`
	Result ListAcceptedNodes200ApplicationJSONResultEnum `json:"result"`
}

type ListAcceptedNodesRequest struct {
	QueryParams ListAcceptedNodesQueryParams
}

type ListAcceptedNodesResponse struct {
	ContentType                               string
	StatusCode                                int64
	ListAcceptedNodes200ApplicationJSONObject *ListAcceptedNodes200ApplicationJSON
}
