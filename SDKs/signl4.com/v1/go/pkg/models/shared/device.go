package shared

type Device struct {
	AppVersion       *string `json:"appVersion,omitempty"`
	DeviceID         *string `json:"deviceId,omitempty"`
	Name             *string `json:"name,omitempty"`
	OsVersion        *string `json:"osVersion,omitempty"`
	Ringtone         *string `json:"ringtone,omitempty"`
	RingtoneDisabled *bool   `json:"ringtoneDisabled,omitempty"`
	Type             *int32  `json:"type,omitempty"`
}
