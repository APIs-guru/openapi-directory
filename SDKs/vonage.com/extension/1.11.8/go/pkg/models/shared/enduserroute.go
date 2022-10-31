package shared



type EndUserRoute struct {
    BlockCallerID *bool `json:"block_caller_id,omitempty"`
    CallerID *string `json:"caller_id,omitempty"`
    Dids []Did `json:"dids,omitempty"`
    DndEnabled *bool `json:"dnd_enabled,omitempty"`
    ExtensionHandsets []Line `json:"extension_handsets,omitempty"`
    ExtensionNumber *string `json:"extension_number,omitempty"`
    LocationID *float64 `json:"location_id,omitempty"`
    User *BasicUser `json:"user,omitempty"`
    VttEnabled *bool `json:"vtt_enabled,omitempty"`
    
}

