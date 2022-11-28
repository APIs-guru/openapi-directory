package shared

type SupersimV1Network struct {
	FriendlyName *string       `json:"friendly_name,omitempty"`
	Identifiers  []interface{} `json:"identifiers,omitempty"`
	IsoCountry   *string       `json:"iso_country,omitempty"`
	Sid          *string       `json:"sid,omitempty"`
	URL          *string       `json:"url,omitempty"`
}
