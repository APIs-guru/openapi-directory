package shared

type ResumePointObject struct {
	FullyPlayed      *bool  `json:"fully_played"`
	ResumePositionMs *int32 `json:"resume_position_ms"`
}
