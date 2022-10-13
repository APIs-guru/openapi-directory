package shared

type TranscriptionEnumStatusEnum string

const (
	TranscriptionEnumStatusEnumInProgress TranscriptionEnumStatusEnum = "in-progress"
	TranscriptionEnumStatusEnumCompleted  TranscriptionEnumStatusEnum = "completed"
	TranscriptionEnumStatusEnumFailed     TranscriptionEnumStatusEnum = "failed"
)
