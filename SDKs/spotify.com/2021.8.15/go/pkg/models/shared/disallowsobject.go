package shared



type DisallowsObject struct {
    InterruptingPlayback *bool `json:"interrupting_playback,omitempty"`
    Pausing *bool `json:"pausing,omitempty"`
    Resuming *bool `json:"resuming,omitempty"`
    Seeking *bool `json:"seeking,omitempty"`
    SkippingNext *bool `json:"skipping_next,omitempty"`
    SkippingPrev *bool `json:"skipping_prev,omitempty"`
    TogglingRepeatContext *bool `json:"toggling_repeat_context,omitempty"`
    TogglingRepeatTrack *bool `json:"toggling_repeat_track,omitempty"`
    TogglingShuffle *bool `json:"toggling_shuffle,omitempty"`
    TransferringPlayback *bool `json:"transferring_playback,omitempty"`
    
}

