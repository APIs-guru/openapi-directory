package shared



type NsxvManagerDataSourceRequest struct {
    CentralCliEnabled *bool `json:"central_cli_enabled,omitempty"`
    Credentials PasswordCredentials `json:"credentials"`
    Enabled *bool `json:"enabled,omitempty"`
    Fqdn *string `json:"fqdn,omitempty"`
    IP *string `json:"ip,omitempty"`
    IpfixEnabled *bool `json:"ipfix_enabled,omitempty"`
    Nickname string `json:"nickname"`
    Notes *string `json:"notes,omitempty"`
    ProxyID string `json:"proxy_id"`
    VcenterID string `json:"vcenter_id"`
    
}

