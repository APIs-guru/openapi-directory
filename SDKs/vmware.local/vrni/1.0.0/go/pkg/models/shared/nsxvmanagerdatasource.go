package shared



type NsxvManagerDataSource struct {
    CentralCliEnabled *bool `json:"central_cli_enabled,omitempty"`
    Credentials *PasswordCredentials `json:"credentials,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    EntityID *string `json:"entity_id,omitempty"`
    EntityType *DataSourceTypeEnum `json:"entity_type,omitempty"`
    Fqdn *string `json:"fqdn,omitempty"`
    IP *string `json:"ip,omitempty"`
    IpfixEnabled *bool `json:"ipfix_enabled,omitempty"`
    Nickname *string `json:"nickname,omitempty"`
    Notes *string `json:"notes,omitempty"`
    ProxyID *string `json:"proxy_id,omitempty"`
    VcenterID *string `json:"vcenter_id,omitempty"`
    
}

