package shared

type PicoSettingsDtoAuthenticationTypeEnum string

const (
	PicoSettingsDtoAuthenticationTypeEnumNone    PicoSettingsDtoAuthenticationTypeEnum = "None"
	PicoSettingsDtoAuthenticationTypeEnumBackend PicoSettingsDtoAuthenticationTypeEnum = "Backend"
)

type PicoSettingsDto struct {
	AuthenticationType    *PicoSettingsDtoAuthenticationTypeEnum `json:"AuthenticationType"`
	DisplayBrightness     *string                                `json:"DisplayBrightness"`
	DNSName               *string                                `json:"DnsName"`
	IdleImageData         *string                                `json:"IdleImageData"`
	IdleImageURL          *string                                `json:"IdleImageUrl"`
	InternalIP            *string                                `json:"InternalIp"`
	LoadmanagementGroupID *string                                `json:"LoadmanagementGroupId"`
	MaxCurrent            *int32                                 `json:"MaxCurrent"`
	MinCurrent            *int32                                 `json:"MinCurrent"`
	ModbusTCP             *bool                                  `json:"ModbusTcp"`
	Name                  *string                                `json:"Name"`
}
