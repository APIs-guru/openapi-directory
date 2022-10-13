package shared

type Video struct {
	EmbedURL             *string              `json:"embedUrl"`
	LicensingInformation LicensingInformation `json:"licensingInformation"`
	Source               Source               `json:"source"`
	URL                  string               `json:"url"`
}
