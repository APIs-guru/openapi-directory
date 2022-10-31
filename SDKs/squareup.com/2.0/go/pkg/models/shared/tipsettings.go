package shared



type TipSettings struct {
    AllowTipping *bool `json:"allow_tipping,omitempty"`
    CustomTipField *bool `json:"custom_tip_field,omitempty"`
    SeparateTipScreen *bool `json:"separate_tip_screen,omitempty"`
    SmartTipping *bool `json:"smart_tipping,omitempty"`
    TipPercentages []int64 `json:"tip_percentages,omitempty"`
    
}

