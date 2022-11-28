package shared

// RuleTargetsExclude
// list of groups to exclude from rule application
type RuleTargetsExclude struct {
	Or []RuleTargetEnum `json:"or,omitempty"`
}

// RuleTargetsInclude
// list of groups to include in rule application
type RuleTargetsInclude struct {
	Or []RuleTargetEnum `json:"or,omitempty"`
}

type RuleTargets struct {
	Exclude RuleTargetsExclude `json:"exclude"`
	Include RuleTargetsInclude `json:"include"`
}
