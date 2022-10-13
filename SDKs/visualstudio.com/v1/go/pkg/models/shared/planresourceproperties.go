package shared

type PlanResourceProperties struct {
	DefaultAutoSuspendDelayMinutes *int32                            `json:"defaultAutoSuspendDelayMinutes"`
	DefaultCodespaceSku            *string                           `json:"defaultCodespaceSku"`
	DefaultEnvironmentSku          *string                           `json:"defaultEnvironmentSku"`
	Encryption                     *PlanResourceEncryptionProperties `json:"encryption"`
	UserID                         *string                           `json:"userId"`
	VnetProperties                 *VnetProperties                   `json:"vnetProperties"`
}
