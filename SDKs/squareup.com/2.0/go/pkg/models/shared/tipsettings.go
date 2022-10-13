package shared

type TipSettings struct {
	AllowTipping      *bool   `json:"allow_tipping"`
	CustomTipField    *bool   `json:"custom_tip_field"`
	SeparateTipScreen *bool   `json:"separate_tip_screen"`
	SmartTipping      *bool   `json:"smart_tipping"`
	TipPercentages    []int64 `json:"tip_percentages"`
}
