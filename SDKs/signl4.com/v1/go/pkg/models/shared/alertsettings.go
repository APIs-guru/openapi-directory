package shared

type AlertSettings struct {
	FilterAction                 *int32 `json:"filterAction"`
	FilterMode                   *int32 `json:"filterMode"`
	OptOutMode                   *int32 `json:"optOutMode"`
	PersistentNotificicationMode *int32 `json:"persistentNotificicationMode"`
	ResponseMode                 *int32 `json:"responseMode"`
	ResponseTime                 *int32 `json:"responseTime"`
}
