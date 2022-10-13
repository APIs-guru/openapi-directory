package shared

type APIV2010AccountCallStream struct {
	AccountSid  *string               `json:"account_sid"`
	CallSid     *string               `json:"call_sid"`
	DateUpdated *string               `json:"date_updated"`
	Name        *string               `json:"name"`
	Sid         *string               `json:"sid"`
	Status      *StreamEnumStatusEnum `json:"status"`
	URI         *string               `json:"uri"`
}
