package shared

type Device struct {
	AppVersion       *string `json:"appVersion"`
	DeviceID         *string `json:"deviceId"`
	Name             *string `json:"name"`
	OsVersion        *string `json:"osVersion"`
	Ringtone         *string `json:"ringtone"`
	RingtoneDisabled *bool   `json:"ringtoneDisabled"`
	Type             *int32  `json:"type"`
}
