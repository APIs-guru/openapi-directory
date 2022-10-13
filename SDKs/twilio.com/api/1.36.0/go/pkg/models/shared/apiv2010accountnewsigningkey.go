package shared

type APIV2010AccountNewSigningKey struct {
	DateCreated  *string `json:"date_created"`
	DateUpdated  *string `json:"date_updated"`
	FriendlyName *string `json:"friendly_name"`
	Secret       *string `json:"secret"`
	Sid          *string `json:"sid"`
}
