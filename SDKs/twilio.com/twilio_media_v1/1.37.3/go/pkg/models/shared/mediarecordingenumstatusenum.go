package shared

type MediaRecordingEnumStatusEnum string

const (
	MediaRecordingEnumStatusEnumProcessing MediaRecordingEnumStatusEnum = "processing"
	MediaRecordingEnumStatusEnumCompleted  MediaRecordingEnumStatusEnum = "completed"
	MediaRecordingEnumStatusEnumDeleted    MediaRecordingEnumStatusEnum = "deleted"
	MediaRecordingEnumStatusEnumFailed     MediaRecordingEnumStatusEnum = "failed"
)
