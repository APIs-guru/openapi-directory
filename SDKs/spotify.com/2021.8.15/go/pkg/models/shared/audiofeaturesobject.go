package shared

type AudioFeaturesObject struct {
	Acousticness     *float64 `json:"acousticness,omitempty"`
	AnalysisURL      *string  `json:"analysis_url,omitempty"`
	Danceability     *float64 `json:"danceability,omitempty"`
	DurationMs       *int32   `json:"duration_ms,omitempty"`
	Energy           *float64 `json:"energy,omitempty"`
	ID               *string  `json:"id,omitempty"`
	Instrumentalness *float64 `json:"instrumentalness,omitempty"`
	Key              *int32   `json:"key,omitempty"`
	Liveness         *float64 `json:"liveness,omitempty"`
	Loudness         *float64 `json:"loudness,omitempty"`
	Mode             *int32   `json:"mode,omitempty"`
	Speechiness      *float64 `json:"speechiness,omitempty"`
	Tempo            *float64 `json:"tempo,omitempty"`
	TimeSignature    *int32   `json:"time_signature,omitempty"`
	TrackHref        *string  `json:"track_href,omitempty"`
	Type             *string  `json:"type,omitempty"`
	URI              *string  `json:"uri,omitempty"`
	Valence          *float64 `json:"valence,omitempty"`
}
