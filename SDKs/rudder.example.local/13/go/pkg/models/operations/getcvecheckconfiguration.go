package operations




type GetCveCheckConfiguration200ApplicationJSONActionEnum string

const (
    GetCveCheckConfiguration200ApplicationJSONActionEnumGetCveCheckConfiguration GetCveCheckConfiguration200ApplicationJSONActionEnum = "getCVECheckConfiguration"
)


type GetCveCheckConfiguration200ApplicationJSONData struct {
    APIKey *string `json:"apiKey,omitempty"`
    URL *string `json:"url,omitempty"`
    
}


type GetCveCheckConfiguration200ApplicationJSONResultEnum string

const (
    GetCveCheckConfiguration200ApplicationJSONResultEnumSuccess GetCveCheckConfiguration200ApplicationJSONResultEnum = "success"
GetCveCheckConfiguration200ApplicationJSONResultEnumError GetCveCheckConfiguration200ApplicationJSONResultEnum = "error"
)


type GetCveCheckConfiguration200ApplicationJSON struct {
    Action GetCveCheckConfiguration200ApplicationJSONActionEnum `json:"action"`
    Data GetCveCheckConfiguration200ApplicationJSONData `json:"data"`
    Result GetCveCheckConfiguration200ApplicationJSONResultEnum `json:"result"`
    
}

type GetCveCheckConfigurationResponse struct {
    ContentType string 
    StatusCode int64 
    GetCveCheckConfiguration200ApplicationJSONObject *GetCveCheckConfiguration200ApplicationJSON 
    
}

