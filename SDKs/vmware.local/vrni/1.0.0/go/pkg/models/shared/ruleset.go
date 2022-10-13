package shared

type RuleSetRuleSetTypeEnum string

const (
	RuleSetRuleSetTypeEnumNsxStandard RuleSetRuleSetTypeEnum = "NSX_STANDARD"
	RuleSetRuleSetTypeEnumNsxRedirect RuleSetRuleSetTypeEnum = "NSX_REDIRECT"
	RuleSetRuleSetTypeEnumAwsStandard RuleSetRuleSetTypeEnum = "AWS_STANDARD"
)

type RuleSet struct {
	Firewall    *Reference              `json:"firewall"`
	RuleSetType *RuleSetRuleSetTypeEnum `json:"rule_set_type"`
	Rules       []Reference             `json:"rules"`
}
