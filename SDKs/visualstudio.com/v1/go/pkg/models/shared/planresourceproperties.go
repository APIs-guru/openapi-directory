package shared

type PlanResourceProperties struct {
	DefaultAutoSuspendDelayMinutes *int32                            `json:"defaultAutoSuspendDelayMinutes,omitempty"`
	DefaultCodespaceSku            *string                           `json:"defaultCodespaceSku,omitempty"`
	DefaultEnvironmentSku          *string                           `json:"defaultEnvironmentSku,omitempty"`
	Encryption                     *PlanResourceEncryptionProperties `json:"encryption,omitempty"`
	UserID                         *string                           `json:"userId,omitempty"`
	VnetProperties                 *VnetProperties                   `json:"vnetProperties,omitempty"`
}
