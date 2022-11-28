package shared

type RecordingEnumStatusEnum string

const (
	RecordingEnumStatusEnumProcessing RecordingEnumStatusEnum = "processing"
	RecordingEnumStatusEnumCompleted  RecordingEnumStatusEnum = "completed"
	RecordingEnumStatusEnumDeleted    RecordingEnumStatusEnum = "deleted"
	RecordingEnumStatusEnumFailed     RecordingEnumStatusEnum = "failed"
)
