package shared

// AwardRecipient
// An `Award_Recipient` object represents the team and/or person who received an award at an event.
type AwardRecipient struct {
	Awardee *string `json:"awardee,omitempty"`
	TeamKey *string `json:"team_key,omitempty"`
}
