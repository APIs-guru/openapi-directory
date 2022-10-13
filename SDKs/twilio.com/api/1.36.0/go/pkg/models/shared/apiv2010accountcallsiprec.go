package shared

type APIV2010AccountCallSiprec struct {
	AccountSid  *string               `json:"account_sid"`
	CallSid     *string               `json:"call_sid"`
	DateUpdated *string               `json:"date_updated"`
	Name        *string               `json:"name"`
	Sid         *string               `json:"sid"`
	Status      *SiprecEnumStatusEnum `json:"status"`
	URI         *string               `json:"uri"`
}
