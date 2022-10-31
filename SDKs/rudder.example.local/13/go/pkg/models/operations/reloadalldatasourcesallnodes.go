package operations




type ReloadAllDatasourcesAllNodes200ApplicationJSONActionEnum string

const (
    ReloadAllDatasourcesAllNodes200ApplicationJSONActionEnumReloadAllDatasourcesAllNodes ReloadAllDatasourcesAllNodes200ApplicationJSONActionEnum = "ReloadAllDatasourcesAllNodes"
)



type ReloadAllDatasourcesAllNodes200ApplicationJSONResultEnum string

const (
    ReloadAllDatasourcesAllNodes200ApplicationJSONResultEnumSuccess ReloadAllDatasourcesAllNodes200ApplicationJSONResultEnum = "success"
ReloadAllDatasourcesAllNodes200ApplicationJSONResultEnumError ReloadAllDatasourcesAllNodes200ApplicationJSONResultEnum = "error"
)


type ReloadAllDatasourcesAllNodes200ApplicationJSON struct {
    Action ReloadAllDatasourcesAllNodes200ApplicationJSONActionEnum `json:"action"`
    Data string `json:"data"`
    Result ReloadAllDatasourcesAllNodes200ApplicationJSONResultEnum `json:"result"`
    
}

type ReloadAllDatasourcesAllNodesResponse struct {
    ContentType string 
    ReloadAllDatasourcesAllNodes200ApplicationJSONObject *ReloadAllDatasourcesAllNodes200ApplicationJSON 
    StatusCode int64 
    
}

