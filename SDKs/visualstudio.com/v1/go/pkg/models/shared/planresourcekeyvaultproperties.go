package shared

type PlanResourceKeyVaultProperties struct {
	KeyName     *string `json:"keyName,omitempty"`
	KeyVaultURI *string `json:"keyVaultUri,omitempty"`
	KeyVersion  *string `json:"keyVersion,omitempty"`
}
