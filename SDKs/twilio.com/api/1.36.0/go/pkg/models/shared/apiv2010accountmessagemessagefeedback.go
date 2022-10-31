package shared



type APIV2010AccountMessageMessageFeedback struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *string `json:"date_created,omitempty"`
    DateUpdated *string `json:"date_updated,omitempty"`
    MessageSid *string `json:"message_sid,omitempty"`
    Outcome *MessageFeedbackEnumOutcomeEnum `json:"outcome,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

