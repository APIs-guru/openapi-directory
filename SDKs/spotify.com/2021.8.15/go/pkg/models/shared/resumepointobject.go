package shared

// ResumePointObject

// https://developer.spotify.com/documentation/web-api/reference/#object-resumepointobject - Find more info on the official Spotify Web API Reference
type ResumePointObject struct {
	FullyPlayed      *bool  `json:"fully_played,omitempty"`
	ResumePositionMs *int32 `json:"resume_position_ms,omitempty"`
}
