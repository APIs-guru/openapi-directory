package shared

type AlertSettings struct {
	FilterAction                 *int32 `json:"filterAction,omitempty"`
	FilterMode                   *int32 `json:"filterMode,omitempty"`
	OptOutMode                   *int32 `json:"optOutMode,omitempty"`
	PersistentNotificicationMode *int32 `json:"persistentNotificicationMode,omitempty"`
	ResponseMode                 *int32 `json:"responseMode,omitempty"`
	ResponseTime                 *int32 `json:"responseTime,omitempty"`
}
