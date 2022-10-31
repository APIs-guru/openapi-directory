package operations




type FileWatcherStart200ApplicationJSONActionEnum string

const (
    FileWatcherStart200ApplicationJSONActionEnumFileWatcherStart FileWatcherStart200ApplicationJSONActionEnum = "fileWatcherStart"
)



type FileWatcherStart200ApplicationJSONResultEnum string

const (
    FileWatcherStart200ApplicationJSONResultEnumSuccess FileWatcherStart200ApplicationJSONResultEnum = "success"
FileWatcherStart200ApplicationJSONResultEnumError FileWatcherStart200ApplicationJSONResultEnum = "error"
)


type FileWatcherStart200ApplicationJSON struct {
    Action FileWatcherStart200ApplicationJSONActionEnum `json:"action"`
    Data string `json:"data"`
    Result FileWatcherStart200ApplicationJSONResultEnum `json:"result"`
    
}

type FileWatcherStartResponse struct {
    ContentType string 
    StatusCode int64 
    FileWatcherStart200ApplicationJSONObject *FileWatcherStart200ApplicationJSON 
    
}

