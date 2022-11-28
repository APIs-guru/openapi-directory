package operations

type ReloadAllDatasourcesOneNodePathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
}

type ReloadAllDatasourcesOneNode200ApplicationJSONActionEnum string

const (
	ReloadAllDatasourcesOneNode200ApplicationJSONActionEnumReloadAllDatasourcesOneNode ReloadAllDatasourcesOneNode200ApplicationJSONActionEnum = "ReloadAllDatasourcesOneNode"
)

type ReloadAllDatasourcesOneNode200ApplicationJSONResultEnum string

const (
	ReloadAllDatasourcesOneNode200ApplicationJSONResultEnumSuccess ReloadAllDatasourcesOneNode200ApplicationJSONResultEnum = "success"
	ReloadAllDatasourcesOneNode200ApplicationJSONResultEnumError   ReloadAllDatasourcesOneNode200ApplicationJSONResultEnum = "error"
)

type ReloadAllDatasourcesOneNode200ApplicationJSON struct {
	Action ReloadAllDatasourcesOneNode200ApplicationJSONActionEnum `json:"action"`
	Data   string                                                  `json:"data"`
	Result ReloadAllDatasourcesOneNode200ApplicationJSONResultEnum `json:"result"`
}

type ReloadAllDatasourcesOneNodeRequest struct {
	PathParams ReloadAllDatasourcesOneNodePathParams
}

type ReloadAllDatasourcesOneNodeResponse struct {
	ContentType                                         string
	ReloadAllDatasourcesOneNode200ApplicationJSONObject *ReloadAllDatasourcesOneNode200ApplicationJSON
	StatusCode                                          int64
}
