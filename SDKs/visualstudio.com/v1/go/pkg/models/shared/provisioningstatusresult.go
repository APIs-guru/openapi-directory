package shared

type ProvisioningStatusResult struct {
	CompletedSteps          *int32  `json:"completedSteps"`
	CurrentStepDescription  *string `json:"currentStepDescription"`
	IsReady                 *bool   `json:"isReady"`
	OperationStartedTimeUtc *string `json:"operationStartedTimeUtc"`
	TotalSteps              *int32  `json:"totalSteps"`
}
