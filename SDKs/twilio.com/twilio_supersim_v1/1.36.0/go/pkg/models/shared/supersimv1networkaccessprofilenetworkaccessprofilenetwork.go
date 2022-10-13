package shared

type SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork struct {
	FriendlyName            *string       `json:"friendly_name"`
	Identifiers             []interface{} `json:"identifiers"`
	IsoCountry              *string       `json:"iso_country"`
	NetworkAccessProfileSid *string       `json:"network_access_profile_sid"`
	Sid                     *string       `json:"sid"`
	URL                     *string       `json:"url"`
}
