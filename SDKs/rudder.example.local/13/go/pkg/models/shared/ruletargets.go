package shared

type RuleTargetsExclude struct {
	Or []RuleTargetEnum `json:"or"`
}

type RuleTargetsInclude struct {
	Or []RuleTargetEnum `json:"or"`
}

type RuleTargets struct {
	Exclude RuleTargetsExclude `json:"exclude"`
	Include RuleTargetsInclude `json:"include"`
}
