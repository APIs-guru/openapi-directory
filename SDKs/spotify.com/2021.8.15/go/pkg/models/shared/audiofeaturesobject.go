package shared

type AudioFeaturesObject struct {
	Acousticness     *float64 `json:"acousticness"`
	AnalysisURL      *string  `json:"analysis_url"`
	Danceability     *float64 `json:"danceability"`
	DurationMs       *int32   `json:"duration_ms"`
	Energy           *float64 `json:"energy"`
	ID               *string  `json:"id"`
	Instrumentalness *float64 `json:"instrumentalness"`
	Key              *int32   `json:"key"`
	Liveness         *float64 `json:"liveness"`
	Loudness         *float64 `json:"loudness"`
	Mode             *int32   `json:"mode"`
	Speechiness      *float64 `json:"speechiness"`
	Tempo            *float64 `json:"tempo"`
	TimeSignature    *int32   `json:"time_signature"`
	TrackHref        *string  `json:"track_href"`
	Type             *string  `json:"type"`
	URI              *string  `json:"uri"`
	Valence          *float64 `json:"valence"`
}
