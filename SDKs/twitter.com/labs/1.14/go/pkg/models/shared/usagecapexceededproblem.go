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
	Period *UsageCapExceededProblemPeriodEnum `json:"period"`
	Scope  *UsageCapExceededProblemScopeEnum  `json:"scope"`
	Title  string                             `json:"title"`
	Type   string                             `json:"type"`
}
