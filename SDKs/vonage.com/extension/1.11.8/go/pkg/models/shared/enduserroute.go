package shared

type EndUserRoute struct {
	BlockCallerID     *bool      `json:"block_caller_id"`
	CallerID          *string    `json:"caller_id"`
	Dids              []Did      `json:"dids"`
	DndEnabled        *bool      `json:"dnd_enabled"`
	ExtensionHandsets []Line     `json:"extension_handsets"`
	ExtensionNumber   *string    `json:"extension_number"`
	LocationID        *float64   `json:"location_id"`
	User              *BasicUser `json:"user"`
	VttEnabled        *bool      `json:"vtt_enabled"`
}
