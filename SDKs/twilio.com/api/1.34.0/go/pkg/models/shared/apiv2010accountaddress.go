package shared

type APIV2010AccountAddress struct {
	AccountSid       *string `json:"account_sid"`
	City             *string `json:"city"`
	CustomerName     *string `json:"customer_name"`
	DateCreated      *string `json:"date_created"`
	DateUpdated      *string `json:"date_updated"`
	EmergencyEnabled *bool   `json:"emergency_enabled"`
	FriendlyName     *string `json:"friendly_name"`
	IsoCountry       *string `json:"iso_country"`
	PostalCode       *string `json:"postal_code"`
	Region           *string `json:"region"`
	Sid              *string `json:"sid"`
	Street           *string `json:"street"`
	URI              *string `json:"uri"`
	Validated        *bool   `json:"validated"`
	Verified         *bool   `json:"verified"`
}
