package operations

type ReloadOneDatasourceOneNodePathParams struct {
	DatasourceID string `pathParam:"style=simple,explode=false,name=datasourceId"`
	NodeID       string `pathParam:"style=simple,explode=false,name=nodeId"`
}

type ReloadOneDatasourceOneNodeRequest struct {
	PathParams ReloadOneDatasourceOneNodePathParams
}

type ReloadOneDatasourceOneNode200ApplicationJSONActionEnum string

const (
	ReloadOneDatasourceOneNode200ApplicationJSONActionEnumReloadOneDatasourceOneNode ReloadOneDatasourceOneNode200ApplicationJSONActionEnum = "ReloadOneDatasourceOneNode"
)

type ReloadOneDatasourceOneNode200ApplicationJSONResultEnum string

const (
	ReloadOneDatasourceOneNode200ApplicationJSONResultEnumSuccess ReloadOneDatasourceOneNode200ApplicationJSONResultEnum = "success"
	ReloadOneDatasourceOneNode200ApplicationJSONResultEnumError   ReloadOneDatasourceOneNode200ApplicationJSONResultEnum = "error"
)

type ReloadOneDatasourceOneNode200ApplicationJSON struct {
	Action ReloadOneDatasourceOneNode200ApplicationJSONActionEnum `json:"action"`
	Data   string                                                 `json:"data"`
	Result ReloadOneDatasourceOneNode200ApplicationJSONResultEnum `json:"result"`
}

type ReloadOneDatasourceOneNodeResponse struct {
	ContentType                                        string
	ReloadOneDatasourceOneNode200ApplicationJSONObject *ReloadOneDatasourceOneNode200ApplicationJSON
	StatusCode                                         int64
}
