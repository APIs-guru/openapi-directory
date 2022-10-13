package shared

type CallLog struct {
	Charge                  *float64 `json:"charge"`
	DestinationDeviceName   *string  `json:"destination_device_name"`
	DestinationExtension    *float64 `json:"destination_extension"`
	DestinationSipID        *string  `json:"destination_sip_id"`
	DestinationUser         *string  `json:"destination_user"`
	DestinationUserFullName *string  `json:"destination_user_full_name"`
	Direction               *string  `json:"direction"`
	End                     *string  `json:"end"`
	From                    *string  `json:"from"`
	ID                      *string  `json:"id"`
	InNetwork               *bool    `json:"in_network"`
	International           *bool    `json:"international"`
	Length                  *float64 `json:"length"`
	Rate                    *float64 `json:"rate"`
	Recorded                *bool    `json:"recorded"`
	Result                  *string  `json:"result"`
	SourceDeviceName        *string  `json:"source_device_name"`
	SourceExtension         *float64 `json:"source_extension"`
	SourceSipID             *string  `json:"source_sip_id"`
	SourceUser              *string  `json:"source_user"`
	SourceUserFullName      *string  `json:"source_user_full_name"`
	Start                   *string  `json:"start"`
	To                      *string  `json:"to"`
}
