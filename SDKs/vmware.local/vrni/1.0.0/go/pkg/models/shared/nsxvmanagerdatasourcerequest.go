package shared

type NsxvManagerDataSourceRequest struct {
	CentralCliEnabled *bool               `json:"central_cli_enabled"`
	Credentials       PasswordCredentials `json:"credentials"`
	Enabled           *bool               `json:"enabled"`
	Fqdn              *string             `json:"fqdn"`
	IP                *string             `json:"ip"`
	IpfixEnabled      *bool               `json:"ipfix_enabled"`
	Nickname          string              `json:"nickname"`
	Notes             *string             `json:"notes"`
	ProxyID           string              `json:"proxy_id"`
	VcenterID         string              `json:"vcenter_id"`
}
