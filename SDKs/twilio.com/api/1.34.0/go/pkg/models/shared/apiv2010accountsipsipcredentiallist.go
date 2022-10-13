package shared

type APIV2010AccountSipSipCredentialList struct {
	AccountSid      *string                `json:"account_sid"`
	DateCreated     *string                `json:"date_created"`
	DateUpdated     *string                `json:"date_updated"`
	FriendlyName    *string                `json:"friendly_name"`
	Sid             *string                `json:"sid"`
	SubresourceUris map[string]interface{} `json:"subresource_uris"`
	URI             *string                `json:"uri"`
}
