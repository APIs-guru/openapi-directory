package shared

type IPV4Address struct {
	IPAddress      *string `json:"ip_address"`
	Netmask        *string `json:"netmask"`
	NetworkAddress *string `json:"network_address"`
}
