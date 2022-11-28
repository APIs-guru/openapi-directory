package shared

type ChangeRequestChangesRules struct {
	Action *string `json:"action,omitempty"`
}

type ChangeRequestChanges struct {
	Rules []ChangeRequestChangesRules `json:"rules,omitempty"`
}

type ChangeRequestStatusEnum string

const (
	ChangeRequestStatusEnumDeployed          ChangeRequestStatusEnum = "Deployed"
	ChangeRequestStatusEnumPendingDeployment ChangeRequestStatusEnum = "Pending deployment"
	ChangeRequestStatusEnumCancelled         ChangeRequestStatusEnum = "Cancelled"
	ChangeRequestStatusEnumPendingValidation ChangeRequestStatusEnum = "Pending validation"
	ChangeRequestStatusEnumOpen              ChangeRequestStatusEnum = "Open"
)

// ChangeRequest
// Content of the change request
type ChangeRequest struct {
	Acceptable  *bool                    `json:"acceptable,omitempty"`
	Changes     *ChangeRequestChanges    `json:"changes,omitempty"`
	CreatedBy   *string                  `json:"created by,omitempty"`
	Description *string                  `json:"description,omitempty"`
	ID          *int64                   `json:"id,omitempty"`
	Name        *string                  `json:"name,omitempty"`
	Status      *ChangeRequestStatusEnum `json:"status,omitempty"`
}
