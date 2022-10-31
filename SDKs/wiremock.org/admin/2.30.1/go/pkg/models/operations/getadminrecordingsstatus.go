package operations

type GetAdminRecordingsStatus200ApplicationJSONStatusEnum string

const (
	GetAdminRecordingsStatus200ApplicationJSONStatusEnumNeverStarted GetAdminRecordingsStatus200ApplicationJSONStatusEnum = "NeverStarted"
	GetAdminRecordingsStatus200ApplicationJSONStatusEnumRecording    GetAdminRecordingsStatus200ApplicationJSONStatusEnum = "Recording"
	GetAdminRecordingsStatus200ApplicationJSONStatusEnumStopped      GetAdminRecordingsStatus200ApplicationJSONStatusEnum = "Stopped"
)

type GetAdminRecordingsStatus200ApplicationJSON struct {
	Status *GetAdminRecordingsStatus200ApplicationJSONStatusEnum `json:"status,omitempty"`
}

type GetAdminRecordingsStatusResponse struct {
	ContentType                                      string
	GetAdminRecordingsStatus200ApplicationJSONObject *GetAdminRecordingsStatus200ApplicationJSON
	StatusCode                                       int64
}
