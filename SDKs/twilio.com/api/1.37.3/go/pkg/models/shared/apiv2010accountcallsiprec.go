package shared

type APIV2010AccountCallSiprec struct {
	AccountSid  *string               `json:"account_sid,omitempty"`
	CallSid     *string               `json:"call_sid,omitempty"`
	DateUpdated *string               `json:"date_updated,omitempty"`
	Name        *string               `json:"name,omitempty"`
	Sid         *string               `json:"sid,omitempty"`
	Status      *SiprecEnumStatusEnum `json:"status,omitempty"`
	URI         *string               `json:"uri,omitempty"`
}
