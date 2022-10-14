package shared

type UpdateCloudEnvironmentBody struct {
	AutoShutdownDelayMinutes *int32  `json:"autoShutdownDelayMinutes,omitempty"`
	FriendlyName             *string `json:"friendlyName,omitempty"`
	PlanAccessToken          *string `json:"planAccessToken,omitempty"`
	PlanID                   *string `json:"planId,omitempty"`
	SkuName                  *string `json:"skuName,omitempty"`
}
