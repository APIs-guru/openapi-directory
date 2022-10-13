package shared

type SimplifiedEpisodeObject struct {
	AudioPreviewURL      *string                   `json:"audio_preview_url"`
	Description          *string                   `json:"description"`
	DurationMs           *int32                    `json:"duration_ms"`
	Explicit             *bool                     `json:"explicit"`
	ExternalUrls         *ExternalURLObject        `json:"external_urls"`
	Href                 *string                   `json:"href"`
	HTMLDescription      *string                   `json:"html_description"`
	ID                   *string                   `json:"id"`
	Images               []ImageObject             `json:"images"`
	IsExternallyHosted   *bool                     `json:"is_externally_hosted"`
	IsPlayable           *bool                     `json:"is_playable"`
	Language             *string                   `json:"language"`
	Languages            []string                  `json:"languages"`
	Name                 *string                   `json:"name"`
	ReleaseDate          *string                   `json:"release_date"`
	ReleaseDatePrecision *string                   `json:"release_date_precision"`
	Restrictions         *EpisodeRestrictionObject `json:"restrictions"`
	ResumePoint          *ResumePointObject        `json:"resume_point"`
	Type                 *string                   `json:"type"`
	URI                  *string                   `json:"uri"`
}
