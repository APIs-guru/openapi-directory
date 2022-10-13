package shared

type DisallowsObject struct {
	InterruptingPlayback  *bool `json:"interrupting_playback"`
	Pausing               *bool `json:"pausing"`
	Resuming              *bool `json:"resuming"`
	Seeking               *bool `json:"seeking"`
	SkippingNext          *bool `json:"skipping_next"`
	SkippingPrev          *bool `json:"skipping_prev"`
	TogglingRepeatContext *bool `json:"toggling_repeat_context"`
	TogglingRepeatTrack   *bool `json:"toggling_repeat_track"`
	TogglingShuffle       *bool `json:"toggling_shuffle"`
	TransferringPlayback  *bool `json:"transferring_playback"`
}
