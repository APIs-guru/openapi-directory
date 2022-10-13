package shared

type APIV2010Account struct {
	AuthToken       *string                `json:"auth_token"`
	DateCreated     *string                `json:"date_created"`
	DateUpdated     *string                `json:"date_updated"`
	FriendlyName    *string                `json:"friendly_name"`
	OwnerAccountSid *string                `json:"owner_account_sid"`
	Sid             *string                `json:"sid"`
	Status          *AccountEnumStatusEnum `json:"status"`
	SubresourceUris map[string]interface{} `json:"subresource_uris"`
	Type            *AccountEnumTypeEnum   `json:"type"`
	URI             *string                `json:"uri"`
}
