package shared

type ConferenceEnumConferenceStatusEnum string

const (
	ConferenceEnumConferenceStatusEnumInProgress     ConferenceEnumConferenceStatusEnum = "in_progress"
	ConferenceEnumConferenceStatusEnumNotStarted     ConferenceEnumConferenceStatusEnum = "not_started"
	ConferenceEnumConferenceStatusEnumCompleted      ConferenceEnumConferenceStatusEnum = "completed"
	ConferenceEnumConferenceStatusEnumSummaryTimeout ConferenceEnumConferenceStatusEnum = "summary_timeout"
)
