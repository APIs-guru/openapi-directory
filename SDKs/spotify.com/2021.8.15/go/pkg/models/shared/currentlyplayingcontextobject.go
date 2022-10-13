package shared

type CurrentlyPlayingContextObject struct {
	Actions              *DisallowsObject `json:"actions"`
	Context              *ContextObject   `json:"context"`
	CurrentlyPlayingType *string          `json:"currently_playing_type"`
	Device               *DeviceObject    `json:"device"`
	IsPlaying            *bool            `json:"is_playing"`
	Item                 *interface{}     `json:"item"`
	ProgressMs           *int32           `json:"progress_ms"`
	RepeatState          *string          `json:"repeat_state"`
	ShuffleState         *string          `json:"shuffle_state"`
	Timestamp            *int32           `json:"timestamp"`
}
