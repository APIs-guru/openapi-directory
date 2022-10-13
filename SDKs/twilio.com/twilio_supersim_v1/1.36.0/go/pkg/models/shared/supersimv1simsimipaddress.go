package shared

type SupersimV1SimSimIPAddress struct {
	IPAddress        *string                               `json:"ip_address"`
	IPAddressVersion *SimIPAddressEnumIPAddressVersionEnum `json:"ip_address_version"`
}
