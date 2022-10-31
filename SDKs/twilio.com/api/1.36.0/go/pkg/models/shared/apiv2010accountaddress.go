package shared

type APIV2010AccountAddress struct {
	AccountSid       *string `json:"account_sid,omitempty"`
	City             *string `json:"city,omitempty"`
	CustomerName     *string `json:"customer_name,omitempty"`
	DateCreated      *string `json:"date_created,omitempty"`
	DateUpdated      *string `json:"date_updated,omitempty"`
	EmergencyEnabled *bool   `json:"emergency_enabled,omitempty"`
	FriendlyName     *string `json:"friendly_name,omitempty"`
	IsoCountry       *string `json:"iso_country,omitempty"`
	PostalCode       *string `json:"postal_code,omitempty"`
	Region           *string `json:"region,omitempty"`
	Sid              *string `json:"sid,omitempty"`
	Street           *string `json:"street,omitempty"`
	URI              *string `json:"uri,omitempty"`
	Validated        *bool   `json:"validated,omitempty"`
	Verified         *bool   `json:"verified,omitempty"`
}
