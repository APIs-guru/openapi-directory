package shared

type UpdateCloudEnvironmentBody struct {
	AutoShutdownDelayMinutes *int32  `json:"autoShutdownDelayMinutes"`
	FriendlyName             *string `json:"friendlyName"`
	PlanAccessToken          *string `json:"planAccessToken"`
	PlanID                   *string `json:"planId"`
	SkuName                  *string `json:"skuName"`
}
