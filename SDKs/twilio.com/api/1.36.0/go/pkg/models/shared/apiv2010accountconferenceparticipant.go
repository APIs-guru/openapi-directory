package shared

type APIV2010AccountConferenceParticipant struct {
	AccountSid             *string                    `json:"account_sid"`
	CallSid                *string                    `json:"call_sid"`
	CallSidToCoach         *string                    `json:"call_sid_to_coach"`
	Coaching               *bool                      `json:"coaching"`
	ConferenceSid          *string                    `json:"conference_sid"`
	DateCreated            *string                    `json:"date_created"`
	DateUpdated            *string                    `json:"date_updated"`
	EndConferenceOnExit    *bool                      `json:"end_conference_on_exit"`
	Hold                   *bool                      `json:"hold"`
	Label                  *string                    `json:"label"`
	Muted                  *bool                      `json:"muted"`
	StartConferenceOnEnter *bool                      `json:"start_conference_on_enter"`
	Status                 *ParticipantEnumStatusEnum `json:"status"`
	URI                    *string                    `json:"uri"`
}
