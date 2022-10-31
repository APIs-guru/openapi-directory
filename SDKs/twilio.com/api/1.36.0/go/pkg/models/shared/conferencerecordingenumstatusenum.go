package shared

type ConferenceRecordingEnumStatusEnum string

const (
	ConferenceRecordingEnumStatusEnumInProgress ConferenceRecordingEnumStatusEnum = "in-progress"
	ConferenceRecordingEnumStatusEnumPaused     ConferenceRecordingEnumStatusEnum = "paused"
	ConferenceRecordingEnumStatusEnumStopped    ConferenceRecordingEnumStatusEnum = "stopped"
	ConferenceRecordingEnumStatusEnumProcessing ConferenceRecordingEnumStatusEnum = "processing"
	ConferenceRecordingEnumStatusEnumCompleted  ConferenceRecordingEnumStatusEnum = "completed"
	ConferenceRecordingEnumStatusEnumAbsent     ConferenceRecordingEnumStatusEnum = "absent"
)
