package shared



type VMResult struct {
    Connection *VMConnectionInfo `json:"connection,omitempty"`
    ProvisioningStatus *ProvisioningStatusResult `json:"provisioningStatus,omitempty"`
    Status *int32 `json:"status,omitempty"`
    
}

