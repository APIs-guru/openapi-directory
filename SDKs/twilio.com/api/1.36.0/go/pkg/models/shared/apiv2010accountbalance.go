package shared

type APIV2010AccountBalance struct {
	AccountSid *string `json:"account_sid"`
	Balance    *string `json:"balance"`
	Currency   *string `json:"currency"`
}
