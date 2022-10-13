package shared

type ContextObject struct {
	ExternalUrls *ExternalURLObject `json:"external_urls"`
	Href         *string            `json:"href"`
	Type         *string            `json:"type"`
	URI          *string            `json:"uri"`
}
