package shared

type APIV2010AccountMessageMedia struct {
	AccountSid  *string `json:"account_sid,omitempty"`
	ContentType *string `json:"content_type,omitempty"`
	DateCreated *string `json:"date_created,omitempty"`
	DateUpdated *string `json:"date_updated,omitempty"`
	ParentSid   *string `json:"parent_sid,omitempty"`
	Sid         *string `json:"sid,omitempty"`
	URI         *string `json:"uri,omitempty"`
}
