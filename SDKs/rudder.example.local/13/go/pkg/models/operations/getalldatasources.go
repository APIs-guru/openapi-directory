package operations

import (
"openapi/pkg/models/shared")


type GetAllDataSources200ApplicationJSONActionEnum string

const (
    GetAllDataSources200ApplicationJSONActionEnumGetAllDataSources GetAllDataSources200ApplicationJSONActionEnum = "getAllDataSources"
)


type GetAllDataSources200ApplicationJSONData struct {
    Datasources []shared.Datasource `json:"datasources"`
    
}


type GetAllDataSources200ApplicationJSONResultEnum string

const (
    GetAllDataSources200ApplicationJSONResultEnumSuccess GetAllDataSources200ApplicationJSONResultEnum = "success"
GetAllDataSources200ApplicationJSONResultEnumError GetAllDataSources200ApplicationJSONResultEnum = "error"
)


type GetAllDataSources200ApplicationJSON struct {
    Action GetAllDataSources200ApplicationJSONActionEnum `json:"action"`
    Data GetAllDataSources200ApplicationJSONData `json:"data"`
    Result GetAllDataSources200ApplicationJSONResultEnum `json:"result"`
    
}

type GetAllDataSourcesResponse struct {
    ContentType string 
    StatusCode int64 
    GetAllDataSources200ApplicationJSONObject *GetAllDataSources200ApplicationJSON 
    
}

