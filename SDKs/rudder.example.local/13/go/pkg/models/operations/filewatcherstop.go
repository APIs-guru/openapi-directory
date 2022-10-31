package operations

type FileWatcherStop200ApplicationJSONActionEnum string

const (
	FileWatcherStop200ApplicationJSONActionEnumFileWatcherStop FileWatcherStop200ApplicationJSONActionEnum = "fileWatcherStop"
)

type FileWatcherStop200ApplicationJSONResultEnum string

const (
	FileWatcherStop200ApplicationJSONResultEnumSuccess FileWatcherStop200ApplicationJSONResultEnum = "success"
	FileWatcherStop200ApplicationJSONResultEnumError   FileWatcherStop200ApplicationJSONResultEnum = "error"
)

type FileWatcherStop200ApplicationJSON struct {
	Action FileWatcherStop200ApplicationJSONActionEnum `json:"action"`
	Data   string                                      `json:"data"`
	Result FileWatcherStop200ApplicationJSONResultEnum `json:"result"`
}

type FileWatcherStopResponse struct {
	ContentType                             string
	StatusCode                              int64
	FileWatcherStop200ApplicationJSONObject *FileWatcherStop200ApplicationJSON
}
