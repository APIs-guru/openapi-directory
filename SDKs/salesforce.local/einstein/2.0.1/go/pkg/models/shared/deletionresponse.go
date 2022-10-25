package shared

type DeletionResponseStatusOfTheDeletionEnum string

const (
	DeletionResponseStatusOfTheDeletionEnumQueued                          DeletionResponseStatusOfTheDeletionEnum = "QUEUED"
	DeletionResponseStatusOfTheDeletionEnumRunning                         DeletionResponseStatusOfTheDeletionEnum = "RUNNING"
	DeletionResponseStatusOfTheDeletionEnumSucceededWaitingForCacheRemoval DeletionResponseStatusOfTheDeletionEnum = "SUCCEEDED_WAITING_FOR_CACHE_REMOVAL"
	DeletionResponseStatusOfTheDeletionEnumSucceeded                       DeletionResponseStatusOfTheDeletionEnum = "SUCCEEDED"
	DeletionResponseStatusOfTheDeletionEnumKilled                          DeletionResponseStatusOfTheDeletionEnum = "KILLED"
	DeletionResponseStatusOfTheDeletionEnumFailed                          DeletionResponseStatusOfTheDeletionEnum = "FAILED"
	DeletionResponseStatusOfTheDeletionEnumRetry                           DeletionResponseStatusOfTheDeletionEnum = "RETRY"
)

type DeletionResponseObjectThatSBeingDeletedEnum string

const (
	DeletionResponseObjectThatSBeingDeletedEnumDataset DeletionResponseObjectThatSBeingDeletedEnum = "DATASET"
	DeletionResponseObjectThatSBeingDeletedEnumModel   DeletionResponseObjectThatSBeingDeletedEnum = "MODEL"
)

type DeletionResponse struct {
	DeletedObjectID *string                                      `json:"deletedObjectId,omitempty"`
	ID              *string                                      `json:"id,omitempty"`
	Message         *string                                      `json:"message,omitempty"`
	Object          *string                                      `json:"object,omitempty"`
	OrganizationID  *string                                      `json:"organizationId,omitempty"`
	Progress        *float64                                     `json:"progress,omitempty"`
	Status          *DeletionResponseStatusOfTheDeletionEnum     `json:"status,omitempty"`
	Type            *DeletionResponseObjectThatSBeingDeletedEnum `json:"type,omitempty"`
}
