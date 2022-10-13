package shared

type Command struct {
	Attributes  map[string]interface{} `json:"attributes"`
	Description *string                `json:"description"`
	DeviceID    *int64                 `json:"deviceId"`
	ID          *int64                 `json:"id"`
	Type        *string                `json:"type"`
}
