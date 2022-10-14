package shared

type ScreenshotQuerySchema struct {
	Force      *bool   `json:"force,omitempty"`
	ThumbSize  []int64 `json:"thumb_size,omitempty"`
	WindowSize []int64 `json:"window_size,omitempty"`
}
