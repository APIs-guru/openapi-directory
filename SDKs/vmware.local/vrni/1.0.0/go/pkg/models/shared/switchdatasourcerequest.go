package shared



type SwitchDataSourceRequest struct {
    Credentials *PasswordCredentials `json:"credentials,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    Fqdn *string `json:"fqdn,omitempty"`
    IP *string `json:"ip,omitempty"`
    Nickname string `json:"nickname"`
    Notes *string `json:"notes,omitempty"`
    ProxyID string `json:"proxy_id"`
    
}

