package shared

type SupersimV1SimSimIPAddress struct {
	IPAddress        *string                               `json:"ip_address,omitempty"`
	IPAddressVersion *SimIPAddressEnumIPAddressVersionEnum `json:"ip_address_version,omitempty"`
}
