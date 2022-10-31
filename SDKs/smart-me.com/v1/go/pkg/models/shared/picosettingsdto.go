package shared




type PicoSettingsDtoAuthenticationTypeEnum string

const (
    PicoSettingsDtoAuthenticationTypeEnumNone PicoSettingsDtoAuthenticationTypeEnum = "None"
PicoSettingsDtoAuthenticationTypeEnumBackend PicoSettingsDtoAuthenticationTypeEnum = "Backend"
)


type PicoSettingsDto struct {
    AuthenticationType *PicoSettingsDtoAuthenticationTypeEnum `json:"AuthenticationType,omitempty"`
    DisplayBrightness *string `json:"DisplayBrightness,omitempty"`
    DNSName *string `json:"DnsName,omitempty"`
    IdleImageData *string `json:"IdleImageData,omitempty"`
    IdleImageURL *string `json:"IdleImageUrl,omitempty"`
    InternalIP *string `json:"InternalIp,omitempty"`
    LoadmanagementGroupID *string `json:"LoadmanagementGroupId,omitempty"`
    MaxCurrent *int32 `json:"MaxCurrent,omitempty"`
    MinCurrent *int32 `json:"MinCurrent,omitempty"`
    ModbusTCP *bool `json:"ModbusTcp,omitempty"`
    Name *string `json:"Name,omitempty"`
    
}

