package shared

type ResumePointObject struct {
	FullyPlayed      *bool  `json:"fully_played,omitempty"`
	ResumePositionMs *int32 `json:"resume_position_ms,omitempty"`
}
