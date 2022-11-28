package shared

type SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork struct {
	FriendlyName            *string       `json:"friendly_name,omitempty"`
	Identifiers             []interface{} `json:"identifiers,omitempty"`
	IsoCountry              *string       `json:"iso_country,omitempty"`
	NetworkAccessProfileSid *string       `json:"network_access_profile_sid,omitempty"`
	Sid                     *string       `json:"sid,omitempty"`
	URL                     *string       `json:"url,omitempty"`
}
