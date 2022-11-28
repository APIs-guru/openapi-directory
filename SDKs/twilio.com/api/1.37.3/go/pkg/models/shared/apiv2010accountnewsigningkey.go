package shared

type APIV2010AccountNewSigningKey struct {
	DateCreated  *string `json:"date_created,omitempty"`
	DateUpdated  *string `json:"date_updated,omitempty"`
	FriendlyName *string `json:"friendly_name,omitempty"`
	Secret       *string `json:"secret,omitempty"`
	Sid          *string `json:"sid,omitempty"`
}
