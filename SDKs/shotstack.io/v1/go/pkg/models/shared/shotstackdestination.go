package shared

// ShotstackDestination
// Send rendered assets to the Shotstack hosting and CDN service. This destination is enabled by default.
type ShotstackDestination struct {
	Exclude  *bool  `json:"exclude,omitempty"`
	Provider string `json:"provider"`
}
