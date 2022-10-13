package operations

type GetNodesStatusQueryParams struct {
	Ids string `queryParam:"style=form,explode=true,name=ids"`
}

type GetNodesStatusRequest struct {
	QueryParams GetNodesStatusQueryParams
}

type GetNodesStatus200ApplicationJSONActionEnum string

const (
	GetNodesStatus200ApplicationJSONActionEnumGetNodesStatus GetNodesStatus200ApplicationJSONActionEnum = "getNodesStatus"
)

type GetNodesStatus200ApplicationJSONDataNodesStatusEnum string

const (
	GetNodesStatus200ApplicationJSONDataNodesStatusEnumPending  GetNodesStatus200ApplicationJSONDataNodesStatusEnum = "pending"
	GetNodesStatus200ApplicationJSONDataNodesStatusEnumAccepted GetNodesStatus200ApplicationJSONDataNodesStatusEnum = "accepted"
	GetNodesStatus200ApplicationJSONDataNodesStatusEnumDeleted  GetNodesStatus200ApplicationJSONDataNodesStatusEnum = "deleted"
	GetNodesStatus200ApplicationJSONDataNodesStatusEnumUnknown  GetNodesStatus200ApplicationJSONDataNodesStatusEnum = "unknown"
)

type GetNodesStatus200ApplicationJSONDataNodes struct {
	ID     string                                              `json:"id"`
	Status GetNodesStatus200ApplicationJSONDataNodesStatusEnum `json:"status"`
}

type GetNodesStatus200ApplicationJSONData struct {
	Nodes []GetNodesStatus200ApplicationJSONDataNodes `json:"nodes"`
}

type GetNodesStatus200ApplicationJSONResultEnum string

const (
	GetNodesStatus200ApplicationJSONResultEnumSuccess GetNodesStatus200ApplicationJSONResultEnum = "success"
	GetNodesStatus200ApplicationJSONResultEnumError   GetNodesStatus200ApplicationJSONResultEnum = "error"
)

type GetNodesStatus200ApplicationJSON struct {
	Action GetNodesStatus200ApplicationJSONActionEnum `json:"action"`
	Data   GetNodesStatus200ApplicationJSONData       `json:"data"`
	Result GetNodesStatus200ApplicationJSONResultEnum `json:"result"`
}

type GetNodesStatusResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetNodesStatus200ApplicationJSONObject *GetNodesStatus200ApplicationJSON
}
