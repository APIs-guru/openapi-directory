package shared

type CompositionEnumStatusEnum string

const (
	CompositionEnumStatusEnumEnqueued   CompositionEnumStatusEnum = "enqueued"
	CompositionEnumStatusEnumProcessing CompositionEnumStatusEnum = "processing"
	CompositionEnumStatusEnumCompleted  CompositionEnumStatusEnum = "completed"
	CompositionEnumStatusEnumDeleted    CompositionEnumStatusEnum = "deleted"
	CompositionEnumStatusEnumFailed     CompositionEnumStatusEnum = "failed"
)
