package shared

type ShotstackDestination struct {
	Exclude  *bool  `json:"exclude"`
	Provider string `json:"provider"`
}
