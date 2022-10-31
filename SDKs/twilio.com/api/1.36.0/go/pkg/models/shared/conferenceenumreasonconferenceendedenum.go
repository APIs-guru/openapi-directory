package shared

type ConferenceEnumReasonConferenceEndedEnum string

const (
	ConferenceEnumReasonConferenceEndedEnumConferenceEndedViaAPI                    ConferenceEnumReasonConferenceEndedEnum = "conference-ended-via-api"
	ConferenceEnumReasonConferenceEndedEnumParticipantWithEndConferenceOnExitLeft   ConferenceEnumReasonConferenceEndedEnum = "participant-with-end-conference-on-exit-left"
	ConferenceEnumReasonConferenceEndedEnumParticipantWithEndConferenceOnExitKicked ConferenceEnumReasonConferenceEndedEnum = "participant-with-end-conference-on-exit-kicked"
	ConferenceEnumReasonConferenceEndedEnumLastParticipantKicked                    ConferenceEnumReasonConferenceEndedEnum = "last-participant-kicked"
	ConferenceEnumReasonConferenceEndedEnumLastParticipantLeft                      ConferenceEnumReasonConferenceEndedEnum = "last-participant-left"
)
