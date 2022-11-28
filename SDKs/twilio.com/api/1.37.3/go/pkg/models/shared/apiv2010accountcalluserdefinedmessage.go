package shared

type APIV2010AccountCallUserDefinedMessage struct {
	AccountSid  *string `json:"account_sid,omitempty"`
	CallSid     *string `json:"call_sid,omitempty"`
	DateCreated *string `json:"date_created,omitempty"`
	Sid         *string `json:"sid,omitempty"`
}
