package shared



type CallLog struct {
    Charge *float64 `json:"charge,omitempty"`
    DestinationDeviceName *string `json:"destination_device_name,omitempty"`
    DestinationExtension *float64 `json:"destination_extension,omitempty"`
    DestinationSipID *string `json:"destination_sip_id,omitempty"`
    DestinationUser *string `json:"destination_user,omitempty"`
    DestinationUserFullName *string `json:"destination_user_full_name,omitempty"`
    Direction *string `json:"direction,omitempty"`
    End *string `json:"end,omitempty"`
    From *string `json:"from,omitempty"`
    ID *string `json:"id,omitempty"`
    InNetwork *bool `json:"in_network,omitempty"`
    International *bool `json:"international,omitempty"`
    Length *float64 `json:"length,omitempty"`
    Rate *float64 `json:"rate,omitempty"`
    Recorded *bool `json:"recorded,omitempty"`
    Result *string `json:"result,omitempty"`
    SourceDeviceName *string `json:"source_device_name,omitempty"`
    SourceExtension *float64 `json:"source_extension,omitempty"`
    SourceSipID *string `json:"source_sip_id,omitempty"`
    SourceUser *string `json:"source_user,omitempty"`
    SourceUserFullName *string `json:"source_user_full_name,omitempty"`
    Start *string `json:"start,omitempty"`
    To *string `json:"to,omitempty"`
    
}

