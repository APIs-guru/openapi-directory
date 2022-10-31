package operations




type QueueInformation200ApplicationJSONActionEnum string

const (
    QueueInformation200ApplicationJSONActionEnumQueueInformation QueueInformation200ApplicationJSONActionEnum = "queueInformation"
)


type QueueInformation200ApplicationJSONData struct {
    QueueMaxSize int64 `json:"queueMaxSize"`
    QueueSaturated bool `json:"queueSaturated"`
    
}


type QueueInformation200ApplicationJSONResultEnum string

const (
    QueueInformation200ApplicationJSONResultEnumSuccess QueueInformation200ApplicationJSONResultEnum = "success"
QueueInformation200ApplicationJSONResultEnumError QueueInformation200ApplicationJSONResultEnum = "error"
)


type QueueInformation200ApplicationJSON struct {
    Action QueueInformation200ApplicationJSONActionEnum `json:"action"`
    Data QueueInformation200ApplicationJSONData `json:"data"`
    Result QueueInformation200ApplicationJSONResultEnum `json:"result"`
    
}

type QueueInformationResponse struct {
    ContentType string 
    StatusCode int64 
    QueueInformation200ApplicationJSONObject *QueueInformation200ApplicationJSON 
    
}

