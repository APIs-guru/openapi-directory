package shared

type ScreenshotQuerySchema struct {
	Force      *bool   `json:"force"`
	ThumbSize  []int64 `json:"thumb_size"`
	WindowSize []int64 `json:"window_size"`
}
