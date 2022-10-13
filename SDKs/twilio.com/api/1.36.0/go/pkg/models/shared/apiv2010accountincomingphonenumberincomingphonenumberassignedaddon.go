package shared

type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn struct {
	AccountSid      *string                `json:"account_sid"`
	Configuration   *interface{}           `json:"configuration"`
	DateCreated     *string                `json:"date_created"`
	DateUpdated     *string                `json:"date_updated"`
	Description     *string                `json:"description"`
	FriendlyName    *string                `json:"friendly_name"`
	ResourceSid     *string                `json:"resource_sid"`
	Sid             *string                `json:"sid"`
	SubresourceUris map[string]interface{} `json:"subresource_uris"`
	UniqueName      *string                `json:"unique_name"`
	URI             *string                `json:"uri"`
}
