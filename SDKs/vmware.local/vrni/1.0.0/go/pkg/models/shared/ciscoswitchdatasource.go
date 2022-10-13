package shared

type CiscoSwitchDataSource struct {
	Credentials *PasswordCredentials `json:"credentials"`
	Enabled     *bool                `json:"enabled"`
	EntityID    *string              `json:"entity_id"`
	EntityType  *DataSourceTypeEnum  `json:"entity_type"`
	Fqdn        *string              `json:"fqdn"`
	IP          *string              `json:"ip"`
	Nickname    *string              `json:"nickname"`
	Notes       *string              `json:"notes"`
	ProxyID     *string              `json:"proxy_id"`
	SwitchType  *CiscoSwitchTypeEnum `json:"switch_type"`
}
