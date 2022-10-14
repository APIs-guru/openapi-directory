package shared

type TrusthubV1SupportingDocumentType struct {
	Fields       []interface{} `json:"fields,omitempty"`
	FriendlyName *string       `json:"friendly_name,omitempty"`
	MachineName  *string       `json:"machine_name,omitempty"`
	Sid          *string       `json:"sid,omitempty"`
	URL          *string       `json:"url,omitempty"`
}
