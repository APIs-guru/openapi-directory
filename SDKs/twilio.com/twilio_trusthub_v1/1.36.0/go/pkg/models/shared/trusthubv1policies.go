package shared

type TrusthubV1Policies struct {
	FriendlyName *string      `json:"friendly_name"`
	Requirements *interface{} `json:"requirements"`
	Sid          *string      `json:"sid"`
	URL          *string      `json:"url"`
}
