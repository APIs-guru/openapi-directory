package shared

type ScreenShot struct {
	Height *int64  `json:"height"`
	Hidden *bool   `json:"hidden"`
	ID     *int64  `json:"id"`
	Image  *string `json:"image"`
	Width  *int64  `json:"width"`
}
