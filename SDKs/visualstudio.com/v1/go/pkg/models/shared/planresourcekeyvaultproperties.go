package shared

type PlanResourceKeyVaultProperties struct {
	KeyName     *string `json:"keyName"`
	KeyVaultURI *string `json:"keyVaultUri"`
	KeyVersion  *string `json:"keyVersion"`
}
