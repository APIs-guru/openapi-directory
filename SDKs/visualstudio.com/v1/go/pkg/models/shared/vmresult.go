package shared

type VMResult struct {
	Connection         *VMConnectionInfo         `json:"connection"`
	ProvisioningStatus *ProvisioningStatusResult `json:"provisioningStatus"`
	Status             *int32                    `json:"status"`
}
