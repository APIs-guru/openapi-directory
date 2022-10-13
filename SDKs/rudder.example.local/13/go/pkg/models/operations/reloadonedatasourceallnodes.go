package operations

type ReloadOneDatasourceAllNodesPathParams struct {
	DatasourceID string `pathParam:"style=simple,explode=false,name=datasourceId"`
}

type ReloadOneDatasourceAllNodesRequest struct {
	PathParams ReloadOneDatasourceAllNodesPathParams
}

type ReloadOneDatasourceAllNodes200ApplicationJSONActionEnum string

const (
	ReloadOneDatasourceAllNodes200ApplicationJSONActionEnumReloadOneDatasourceAllNodes ReloadOneDatasourceAllNodes200ApplicationJSONActionEnum = "ReloadOneDatasourceAllNodes"
)

type ReloadOneDatasourceAllNodes200ApplicationJSONResultEnum string

const (
	ReloadOneDatasourceAllNodes200ApplicationJSONResultEnumSuccess ReloadOneDatasourceAllNodes200ApplicationJSONResultEnum = "success"
	ReloadOneDatasourceAllNodes200ApplicationJSONResultEnumError   ReloadOneDatasourceAllNodes200ApplicationJSONResultEnum = "error"
)

type ReloadOneDatasourceAllNodes200ApplicationJSON struct {
	Action ReloadOneDatasourceAllNodes200ApplicationJSONActionEnum `json:"action"`
	Data   string                                                  `json:"data"`
	Result ReloadOneDatasourceAllNodes200ApplicationJSONResultEnum `json:"result"`
}

type ReloadOneDatasourceAllNodesResponse struct {
	ContentType                                         string
	ReloadOneDatasourceAllNodes200ApplicationJSONObject *ReloadOneDatasourceAllNodes200ApplicationJSON
	StatusCode                                          int64
}
