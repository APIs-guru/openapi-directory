package shared

// CurrentlyPlayingContextObject

// https://developer.spotify.com/documentation/web-api/reference/#object-currentlyplayingcontextobject - Find more info on the official Spotify Web API Reference
type CurrentlyPlayingContextObject struct {
	Actions              *DisallowsObject `json:"actions,omitempty"`
	Context              *ContextObject   `json:"context,omitempty"`
	CurrentlyPlayingType *string          `json:"currently_playing_type,omitempty"`
	Device               *DeviceObject    `json:"device,omitempty"`
	IsPlaying            *bool            `json:"is_playing,omitempty"`
	Item                 *interface{}     `json:"item,omitempty"`
	ProgressMs           *int32           `json:"progress_ms,omitempty"`
	RepeatState          *string          `json:"repeat_state,omitempty"`
	ShuffleState         *string          `json:"shuffle_state,omitempty"`
	Timestamp            *int32           `json:"timestamp,omitempty"`
}
