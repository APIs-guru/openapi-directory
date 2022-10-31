package shared



type IPV4Address struct {
    IPAddress *string `json:"ip_address,omitempty"`
    Netmask *string `json:"netmask,omitempty"`
    NetworkAddress *string `json:"network_address,omitempty"`
    
}

