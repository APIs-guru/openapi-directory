package shared

type LinkedTrackObject struct {
	ExternalUrls *ExternalURLObject `json:"external_urls"`
	Href         *string            `json:"href"`
	ID           *string            `json:"id"`
	Type         *string            `json:"type"`
	URI          *string            `json:"uri"`
}
