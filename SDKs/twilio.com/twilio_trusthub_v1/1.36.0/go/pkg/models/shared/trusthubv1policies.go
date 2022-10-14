package shared

type TrusthubV1Policies struct {
	FriendlyName *string      `json:"friendly_name,omitempty"`
	Requirements *interface{} `json:"requirements,omitempty"`
	Sid          *string      `json:"sid,omitempty"`
	URL          *string      `json:"url,omitempty"`
}
