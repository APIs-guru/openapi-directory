package shared

type SkuInfoResult struct {
	AvailableSettings *AvailableSettingsResult `json:"availableSettings"`
	DisplayName       *string                  `json:"displayName"`
	Name              *string                  `json:"name"`
	Os                *string                  `json:"os"`
}
