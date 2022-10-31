package shared

type SyncV1ServiceSyncStreamStreamMessage struct {
	Data *interface{} `json:"data,omitempty"`
	Sid  *string      `json:"sid,omitempty"`
}
