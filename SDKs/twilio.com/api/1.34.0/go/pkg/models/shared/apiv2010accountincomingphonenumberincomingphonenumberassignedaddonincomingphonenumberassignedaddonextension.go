package shared

type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension struct {
	AccountSid       *string `json:"account_sid"`
	AssignedAddOnSid *string `json:"assigned_add_on_sid"`
	Enabled          *bool   `json:"enabled"`
	FriendlyName     *string `json:"friendly_name"`
	ProductName      *string `json:"product_name"`
	ResourceSid      *string `json:"resource_sid"`
	Sid              *string `json:"sid"`
	UniqueName       *string `json:"unique_name"`
	URI              *string `json:"uri"`
}
