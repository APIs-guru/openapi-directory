package shared

type PortRange struct {
	Display         *string `json:"display"`
	End             *int32  `json:"end"`
	IanaName        *string `json:"iana_name"`
	IanaPortDisplay *string `json:"iana_port_display"`
	Start           *int32  `json:"start"`
}
