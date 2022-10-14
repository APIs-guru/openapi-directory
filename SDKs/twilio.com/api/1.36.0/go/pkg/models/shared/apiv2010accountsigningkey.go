package shared

type APIV2010AccountSigningKey struct {
	DateCreated  *string `json:"date_created,omitempty"`
	DateUpdated  *string `json:"date_updated,omitempty"`
	FriendlyName *string `json:"friendly_name,omitempty"`
	Sid          *string `json:"sid,omitempty"`
}
