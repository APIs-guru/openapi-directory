package shared

type CurrentlyPlayingObject struct {
	Context              *ContextObject `json:"context"`
	CurrentlyPlayingType *string        `json:"currently_playing_type"`
	IsPlaying            *bool          `json:"is_playing"`
	Item                 *interface{}   `json:"item"`
	ProgressMs           *int32         `json:"progress_ms"`
	Timestamp            *int32         `json:"timestamp"`
}
