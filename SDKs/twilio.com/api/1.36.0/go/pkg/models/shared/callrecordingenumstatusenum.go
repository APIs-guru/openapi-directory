package shared

type CallRecordingEnumStatusEnum string

const (
	CallRecordingEnumStatusEnumInProgress CallRecordingEnumStatusEnum = "in-progress"
	CallRecordingEnumStatusEnumPaused     CallRecordingEnumStatusEnum = "paused"
	CallRecordingEnumStatusEnumStopped    CallRecordingEnumStatusEnum = "stopped"
	CallRecordingEnumStatusEnumProcessing CallRecordingEnumStatusEnum = "processing"
	CallRecordingEnumStatusEnumCompleted  CallRecordingEnumStatusEnum = "completed"
	CallRecordingEnumStatusEnumAbsent     CallRecordingEnumStatusEnum = "absent"
)
