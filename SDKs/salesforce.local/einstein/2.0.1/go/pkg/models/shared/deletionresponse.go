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
	DeletedObjectID *string                                          `json:"deletedObjectId"`
	ID              *string                                          `json:"id"`
	Message         *string                                          `json:"message"`
	Object          *string                                          `json:"object"`
	OrganizationID  *string                                          `json:"organizationId"`
	Progress        *float64                                         `json:"progress"`
	Status          *DeletionResponseStatusStatusOfTheDeletionEnum   `json:"status"`
	Type            *DeletionResponseTypeObjectThatSBeingDeletedEnum `json:"type"`
}
