package shared

type APIV2010AccountCallPayments struct {
	AccountSid  *string `json:"account_sid"`
	CallSid     *string `json:"call_sid"`
	DateCreated *string `json:"date_created"`
	DateUpdated *string `json:"date_updated"`
	Sid         *string `json:"sid"`
	URI         *string `json:"uri"`
}
