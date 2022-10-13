package shared

type APIV2010AccountMessageMedia struct {
	AccountSid  *string `json:"account_sid"`
	ContentType *string `json:"content_type"`
	DateCreated *string `json:"date_created"`
	DateUpdated *string `json:"date_updated"`
	ParentSid   *string `json:"parent_sid"`
	Sid         *string `json:"sid"`
	URI         *string `json:"uri"`
}
