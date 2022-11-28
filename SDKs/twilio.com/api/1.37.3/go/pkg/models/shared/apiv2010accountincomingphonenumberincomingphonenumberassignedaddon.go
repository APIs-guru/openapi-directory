package shared

type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn struct {
	AccountSid      *string                `json:"account_sid,omitempty"`
	Configuration   *interface{}           `json:"configuration,omitempty"`
	DateCreated     *string                `json:"date_created,omitempty"`
	DateUpdated     *string                `json:"date_updated,omitempty"`
	Description     *string                `json:"description,omitempty"`
	FriendlyName    *string                `json:"friendly_name,omitempty"`
	ResourceSid     *string                `json:"resource_sid,omitempty"`
	Sid             *string                `json:"sid,omitempty"`
	SubresourceUris map[string]interface{} `json:"subresource_uris,omitempty"`
	UniqueName      *string                `json:"unique_name,omitempty"`
	URI             *string                `json:"uri,omitempty"`
}
