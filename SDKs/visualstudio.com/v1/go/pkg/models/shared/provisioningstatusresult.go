package shared



type ProvisioningStatusResult struct {
    CompletedSteps *int32 `json:"completedSteps,omitempty"`
    CurrentStepDescription *string `json:"currentStepDescription,omitempty"`
    IsReady *bool `json:"isReady,omitempty"`
    OperationStartedTimeUtc *string `json:"operationStartedTimeUtc,omitempty"`
    TotalSteps *int32 `json:"totalSteps,omitempty"`
    
}

