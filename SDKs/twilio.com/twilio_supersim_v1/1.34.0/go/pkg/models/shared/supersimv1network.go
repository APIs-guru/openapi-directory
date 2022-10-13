package shared

type SupersimV1Network struct {
	FriendlyName *string       `json:"friendly_name"`
	Identifiers  []interface{} `json:"identifiers"`
	IsoCountry   *string       `json:"iso_country"`
	Sid          *string       `json:"sid"`
	URL          *string       `json:"url"`
}
