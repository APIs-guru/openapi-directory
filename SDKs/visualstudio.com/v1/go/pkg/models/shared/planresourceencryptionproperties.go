package shared

type PlanResourceEncryptionProperties struct {
	KeySource          *string                         `json:"keySource"`
	KeyVaultProperties *PlanResourceKeyVaultProperties `json:"keyVaultProperties"`
}
