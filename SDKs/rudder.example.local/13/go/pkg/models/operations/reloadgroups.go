package operations




type ReloadGroups200ApplicationJSONActionEnum string

const (
    ReloadGroups200ApplicationJSONActionEnumReloadGroups ReloadGroups200ApplicationJSONActionEnum = "reloadGroups"
)



type ReloadGroups200ApplicationJSONDataGroupsEnum string

const (
    ReloadGroups200ApplicationJSONDataGroupsEnumStarted ReloadGroups200ApplicationJSONDataGroupsEnum = "Started"
)


type ReloadGroups200ApplicationJSONData struct {
    Groups ReloadGroups200ApplicationJSONDataGroupsEnum `json:"groups"`
    
}


type ReloadGroups200ApplicationJSONResultEnum string

const (
    ReloadGroups200ApplicationJSONResultEnumSuccess ReloadGroups200ApplicationJSONResultEnum = "success"
ReloadGroups200ApplicationJSONResultEnumError ReloadGroups200ApplicationJSONResultEnum = "error"
)


type ReloadGroups200ApplicationJSON struct {
    Action ReloadGroups200ApplicationJSONActionEnum `json:"action"`
    Data ReloadGroups200ApplicationJSONData `json:"data"`
    Result ReloadGroups200ApplicationJSONResultEnum `json:"result"`
    
}

type ReloadGroupsResponse struct {
    ContentType string 
    StatusCode int64 
    ReloadGroups200ApplicationJSONObject *ReloadGroups200ApplicationJSON 
    
}

