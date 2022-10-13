package operations

type FileWatcherRestart200ApplicationJSONActionEnum string

const (
	FileWatcherRestart200ApplicationJSONActionEnumFileWatcherRestart FileWatcherRestart200ApplicationJSONActionEnum = "fileWatcherRestart"
)

type FileWatcherRestart200ApplicationJSONResultEnum string

const (
	FileWatcherRestart200ApplicationJSONResultEnumSuccess FileWatcherRestart200ApplicationJSONResultEnum = "success"
	FileWatcherRestart200ApplicationJSONResultEnumError   FileWatcherRestart200ApplicationJSONResultEnum = "error"
)

type FileWatcherRestart200ApplicationJSON struct {
	Action FileWatcherRestart200ApplicationJSONActionEnum `json:"action"`
	Data   string                                         `json:"data"`
	Result FileWatcherRestart200ApplicationJSONResultEnum `json:"result"`
}

type FileWatcherRestartResponse struct {
	ContentType                                string
	StatusCode                                 int64
	FileWatcherRestart200ApplicationJSONObject *FileWatcherRestart200ApplicationJSON
}
