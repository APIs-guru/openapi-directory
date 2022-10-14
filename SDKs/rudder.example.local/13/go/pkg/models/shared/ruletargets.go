package shared

type RuleTargetsExclude struct {
	Or []RuleTargetEnum `json:"or,omitempty"`
}

type RuleTargetsInclude struct {
	Or []RuleTargetEnum `json:"or,omitempty"`
}

type RuleTargets struct {
	Exclude RuleTargetsExclude `json:"exclude"`
	Include RuleTargetsInclude `json:"include"`
}
