package operations




type GetAllSettings200ApplicationJSONActionEnum string

const (
    GetAllSettings200ApplicationJSONActionEnumGetAllSettings GetAllSettings200ApplicationJSONActionEnum = "getAllSettings"
)


type GetAllSettings200ApplicationJSONData struct {
    Settings interface{} `json:"settings"`
    
}


type GetAllSettings200ApplicationJSONResultEnum string

const (
    GetAllSettings200ApplicationJSONResultEnumSuccess GetAllSettings200ApplicationJSONResultEnum = "success"
GetAllSettings200ApplicationJSONResultEnumError GetAllSettings200ApplicationJSONResultEnum = "error"
)


type GetAllSettings200ApplicationJSON struct {
    Action GetAllSettings200ApplicationJSONActionEnum `json:"action"`
    Data GetAllSettings200ApplicationJSONData `json:"data"`
    Result GetAllSettings200ApplicationJSONResultEnum `json:"result"`
    
}

type GetAllSettingsResponse struct {
    ContentType string 
    StatusCode int64 
    GetAllSettings200ApplicationJSONObject *GetAllSettings200ApplicationJSON 
    
}

