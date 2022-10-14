package shared

type APIV2010AccountConferenceParticipant struct {
	AccountSid             *string                    `json:"account_sid,omitempty"`
	CallSid                *string                    `json:"call_sid,omitempty"`
	CallSidToCoach         *string                    `json:"call_sid_to_coach,omitempty"`
	Coaching               *bool                      `json:"coaching,omitempty"`
	ConferenceSid          *string                    `json:"conference_sid,omitempty"`
	DateCreated            *string                    `json:"date_created,omitempty"`
	DateUpdated            *string                    `json:"date_updated,omitempty"`
	EndConferenceOnExit    *bool                      `json:"end_conference_on_exit,omitempty"`
	Hold                   *bool                      `json:"hold,omitempty"`
	Label                  *string                    `json:"label,omitempty"`
	Muted                  *bool                      `json:"muted,omitempty"`
	StartConferenceOnEnter *bool                      `json:"start_conference_on_enter,omitempty"`
	Status                 *ParticipantEnumStatusEnum `json:"status,omitempty"`
	URI                    *string                    `json:"uri,omitempty"`
}
