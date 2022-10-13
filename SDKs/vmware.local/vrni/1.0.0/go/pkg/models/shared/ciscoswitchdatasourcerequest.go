package shared

type CiscoSwitchDataSourceRequest struct {
	Credentials *PasswordCredentials `json:"credentials"`
	Enabled     *bool                `json:"enabled"`
	Fqdn        *string              `json:"fqdn"`
	IP          *string              `json:"ip"`
	Nickname    string               `json:"nickname"`
	Notes       *string              `json:"notes"`
	ProxyID     string               `json:"proxy_id"`
	SwitchType  *CiscoSwitchTypeEnum `json:"switch_type"`
}
