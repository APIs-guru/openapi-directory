package shared



type EpisodeObject struct {
    AudioPreviewURL *string `json:"audio_preview_url,omitempty"`
    Description *string `json:"description,omitempty"`
    DurationMs *int32 `json:"duration_ms,omitempty"`
    Explicit *bool `json:"explicit,omitempty"`
    ExternalUrls *ExternalURLObject `json:"external_urls,omitempty"`
    Href *string `json:"href,omitempty"`
    HTMLDescription *string `json:"html_description,omitempty"`
    ID *string `json:"id,omitempty"`
    Images []ImageObject `json:"images,omitempty"`
    IsExternallyHosted *bool `json:"is_externally_hosted,omitempty"`
    IsPlayable *bool `json:"is_playable,omitempty"`
    Language *string `json:"language,omitempty"`
    Languages []string `json:"languages,omitempty"`
    Name *string `json:"name,omitempty"`
    ReleaseDate *string `json:"release_date,omitempty"`
    ReleaseDatePrecision *string `json:"release_date_precision,omitempty"`
    Restrictions *EpisodeRestrictionObject `json:"restrictions,omitempty"`
    ResumePoint *ResumePointObject `json:"resume_point,omitempty"`
    Show *SimplifiedShowObject `json:"show,omitempty"`
    Type *string `json:"type,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

