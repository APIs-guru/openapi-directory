package shared

type PortRange struct {
	Display         *string `json:"display,omitempty"`
	End             *int32  `json:"end,omitempty"`
	IanaName        *string `json:"iana_name,omitempty"`
	IanaPortDisplay *string `json:"iana_port_display,omitempty"`
	Start           *int32  `json:"start,omitempty"`
}
