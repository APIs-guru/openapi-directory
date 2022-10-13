package operations

import (
	"openapi/pkg/models/shared"
)

type ListPendingNodesQueryParams struct {
	Composition *shared.NodeCompositionEnum `queryParam:"style=form,explode=true,name=composition"`
	Include     *string                     `queryParam:"style=form,explode=true,name=include"`
	Query       *shared.NodeQuery           `queryParam:"serialization=json,name=query"`
	Select      *string                     `queryParam:"style=form,explode=true,name=select"`
	Where       []shared.NodeWhere          `queryParam:"serialization=json,name=where"`
}

type ListPendingNodesRequest struct {
	QueryParams ListPendingNodesQueryParams
}

type ListPendingNodes200ApplicationJSONActionEnum string

const (
	ListPendingNodes200ApplicationJSONActionEnumListPendingNodes ListPendingNodes200ApplicationJSONActionEnum = "listPendingNodes"
)

type ListPendingNodes200ApplicationJSONData struct {
	Nodes []shared.NodeFull `json:"nodes"`
}

type ListPendingNodes200ApplicationJSONResultEnum string

const (
	ListPendingNodes200ApplicationJSONResultEnumSuccess ListPendingNodes200ApplicationJSONResultEnum = "success"
	ListPendingNodes200ApplicationJSONResultEnumError   ListPendingNodes200ApplicationJSONResultEnum = "error"
)

type ListPendingNodes200ApplicationJSON struct {
	Action ListPendingNodes200ApplicationJSONActionEnum `json:"action"`
	Data   ListPendingNodes200ApplicationJSONData       `json:"data"`
	Result ListPendingNodes200ApplicationJSONResultEnum `json:"result"`
}

type ListPendingNodesResponse struct {
	ContentType                              string
	StatusCode                               int64
	ListPendingNodes200ApplicationJSONObject *ListPendingNodes200ApplicationJSON
}
