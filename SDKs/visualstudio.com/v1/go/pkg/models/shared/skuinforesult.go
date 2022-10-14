package shared

type SkuInfoResult struct {
	AvailableSettings *AvailableSettingsResult `json:"availableSettings,omitempty"`
	DisplayName       *string                  `json:"displayName,omitempty"`
	Name              *string                  `json:"name,omitempty"`
	Os                *string                  `json:"os,omitempty"`
}
