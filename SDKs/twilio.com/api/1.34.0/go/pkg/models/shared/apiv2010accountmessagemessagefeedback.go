package shared

type APIV2010AccountMessageMessageFeedback struct {
	AccountSid  *string                         `json:"account_sid"`
	DateCreated *string                         `json:"date_created"`
	DateUpdated *string                         `json:"date_updated"`
	MessageSid  *string                         `json:"message_sid"`
	Outcome     *MessageFeedbackEnumOutcomeEnum `json:"outcome"`
	URI         *string                         `json:"uri"`
}
