package shared

type TrusthubV1SupportingDocumentType struct {
	Fields       []interface{} `json:"fields"`
	FriendlyName *string       `json:"friendly_name"`
	MachineName  *string       `json:"machine_name"`
	Sid          *string       `json:"sid"`
	URL          *string       `json:"url"`
}
