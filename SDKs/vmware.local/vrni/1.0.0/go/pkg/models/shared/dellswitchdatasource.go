package shared



type DellSwitchDataSource struct {
    Credentials *PasswordCredentials `json:"credentials,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    EntityID *string `json:"entity_id,omitempty"`
    EntityType *DataSourceTypeEnum `json:"entity_type,omitempty"`
    Fqdn *string `json:"fqdn,omitempty"`
    IP *string `json:"ip,omitempty"`
    Nickname *string `json:"nickname,omitempty"`
    Notes *string `json:"notes,omitempty"`
    ProxyID *string `json:"proxy_id,omitempty"`
    SwitchType *DellSwitchTypeEnum `json:"switch_type,omitempty"`
    
}

