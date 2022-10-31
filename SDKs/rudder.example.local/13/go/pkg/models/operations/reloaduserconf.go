package operations




type ReloadUserConf200ApplicationJSONActionEnum string

const (
    ReloadUserConf200ApplicationJSONActionEnumReloadUserConf ReloadUserConf200ApplicationJSONActionEnum = "reloadUserConf"
)


type ReloadUserConf200ApplicationJSONDataReload struct {
    Status string `json:"status"`
    
}

type ReloadUserConf200ApplicationJSONData struct {
    Reload ReloadUserConf200ApplicationJSONDataReload `json:"reload"`
    
}


type ReloadUserConf200ApplicationJSONResultEnum string

const (
    ReloadUserConf200ApplicationJSONResultEnumSuccess ReloadUserConf200ApplicationJSONResultEnum = "success"
ReloadUserConf200ApplicationJSONResultEnumError ReloadUserConf200ApplicationJSONResultEnum = "error"
)


type ReloadUserConf200ApplicationJSON struct {
    Action ReloadUserConf200ApplicationJSONActionEnum `json:"action"`
    Data ReloadUserConf200ApplicationJSONData `json:"data"`
    Result ReloadUserConf200ApplicationJSONResultEnum `json:"result"`
    
}

type ReloadUserConfResponse struct {
    ContentType string 
    StatusCode int64 
    ReloadUserConf200ApplicationJSONObject *ReloadUserConf200ApplicationJSON 
    
}

