package shared

type TaskEnumStatusEnum string

const (
	TaskEnumStatusEnumPending   TaskEnumStatusEnum = "pending"
	TaskEnumStatusEnumReserved  TaskEnumStatusEnum = "reserved"
	TaskEnumStatusEnumAssigned  TaskEnumStatusEnum = "assigned"
	TaskEnumStatusEnumCanceled  TaskEnumStatusEnum = "canceled"
	TaskEnumStatusEnumCompleted TaskEnumStatusEnum = "completed"
	TaskEnumStatusEnumWrapping  TaskEnumStatusEnum = "wrapping"
)
