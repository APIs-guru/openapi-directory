package shared

type DeletionResponseStatusStatusOfTheDeletionEnum string

const (
	DeletionResponseStatusStatusOfTheDeletionEnumQueued                          DeletionResponseStatusStatusOfTheDeletionEnum = "QUEUED"
	DeletionResponseStatusStatusOfTheDeletionEnumRunning                         DeletionResponseStatusStatusOfTheDeletionEnum = "RUNNING"
	DeletionResponseStatusStatusOfTheDeletionEnumSucceededWaitingForCacheRemoval DeletionResponseStatusStatusOfTheDeletionEnum = "SUCCEEDED_WAITING_FOR_CACHE_REMOVAL"
	DeletionResponseStatusStatusOfTheDeletionEnumSucceeded                       DeletionResponseStatusStatusOfTheDeletionEnum = "SUCCEEDED"
	DeletionResponseStatusStatusOfTheDeletionEnumKilled                          DeletionResponseStatusStatusOfTheDeletionEnum = "KILLED"
	DeletionResponseStatusStatusOfTheDeletionEnumFailed                          DeletionResponseStatusStatusOfTheDeletionEnum = "FAILED"
	DeletionResponseStatusStatusOfTheDeletionEnumRetry                           DeletionResponseStatusStatusOfTheDeletionEnum = "RETRY"
)

type DeletionResponseTypeObjectThatSBeingDeletedEnum string

const (
	DeletionResponseTypeObjectThatSBeingDeletedEnumDataset DeletionResponseTypeObjectThatSBeingDeletedEnum = "DATASET"
	DeletionResponseTypeObjectThatSBeingDeletedEnumModel   DeletionResponseTypeObjectThatSBeingDeletedEnum = "MODEL"
)

type DeletionResponse struct {
	DeletedObjectID *string                                          `json:"deletedObjectId,omitempty"`
	ID              *string                                          `json:"id,omitempty"`
	Message         *string                                          `json:"message,omitempty"`
	Object          *string                                          `json:"object,omitempty"`
	OrganizationID  *string                                          `json:"organizationId,omitempty"`
	Progress        *float64                                         `json:"progress,omitempty"`
	Status          *DeletionResponseStatusStatusOfTheDeletionEnum   `json:"status,omitempty"`
	Type            *DeletionResponseTypeObjectThatSBeingDeletedEnum `json:"type,omitempty"`
}
