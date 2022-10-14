package shared

type APIV2010Account struct {
	AuthToken       *string                `json:"auth_token,omitempty"`
	DateCreated     *string                `json:"date_created,omitempty"`
	DateUpdated     *string                `json:"date_updated,omitempty"`
	FriendlyName    *string                `json:"friendly_name,omitempty"`
	OwnerAccountSid *string                `json:"owner_account_sid,omitempty"`
	Sid             *string                `json:"sid,omitempty"`
	Status          *AccountEnumStatusEnum `json:"status,omitempty"`
	SubresourceUris map[string]interface{} `json:"subresource_uris,omitempty"`
	Type            *AccountEnumTypeEnum   `json:"type,omitempty"`
	URI             *string                `json:"uri,omitempty"`
}
