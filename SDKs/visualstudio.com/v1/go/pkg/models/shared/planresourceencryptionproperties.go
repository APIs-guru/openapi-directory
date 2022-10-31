package shared



type PlanResourceEncryptionProperties struct {
    KeySource *string `json:"keySource,omitempty"`
    KeyVaultProperties *PlanResourceKeyVaultProperties `json:"keyVaultProperties,omitempty"`
    
}

