package shared

type UsageCapExceededProblemPeriodEnum string

const (
	UsageCapExceededProblemPeriodEnumDaily   UsageCapExceededProblemPeriodEnum = "Daily"
	UsageCapExceededProblemPeriodEnumMonthly UsageCapExceededProblemPeriodEnum = "Monthly"
)

type UsageCapExceededProblemScopeEnum string

const (
	UsageCapExceededProblemScopeEnumAccount UsageCapExceededProblemScopeEnum = "Account"
	UsageCapExceededProblemScopeEnumProduct UsageCapExceededProblemScopeEnum = "Product"
)

type UsageCapExceededProblem struct {
	Detail string                             `json:"detail"`
	Period *UsageCapExceededProblemPeriodEnum `json:"period,omitempty"`
	Scope  *UsageCapExceededProblemScopeEnum  `json:"scope,omitempty"`
	Title  string                             `json:"title"`
	Type   string                             `json:"type"`
}
