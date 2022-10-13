package shared

type ChangeRequestChangesRules struct {
	Action *string `json:"action"`
}

type ChangeRequestChanges struct {
	Rules []ChangeRequestChangesRules `json:"rules"`
}

type ChangeRequestStatusEnum string

const (
	ChangeRequestStatusEnumDeployed          ChangeRequestStatusEnum = "Deployed"
	ChangeRequestStatusEnumPendingDeployment ChangeRequestStatusEnum = "Pending deployment"
	ChangeRequestStatusEnumCancelled         ChangeRequestStatusEnum = "Cancelled"
	ChangeRequestStatusEnumPendingValidation ChangeRequestStatusEnum = "Pending validation"
	ChangeRequestStatusEnumOpen              ChangeRequestStatusEnum = "Open"
)

type ChangeRequest struct {
	Acceptable  *bool                    `json:"acceptable"`
	Changes     *ChangeRequestChanges    `json:"changes"`
	CreatedBy   *string                  `json:"created by"`
	Description *string                  `json:"description"`
	ID          *int64                   `json:"id"`
	Name        *string                  `json:"name"`
	Status      *ChangeRequestStatusEnum `json:"status"`
}
