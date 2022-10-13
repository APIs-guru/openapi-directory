package shared

type SyncV1ServiceSyncStreamStreamMessage struct {
	Data *interface{} `json:"data"`
	Sid  *string      `json:"sid"`
}
