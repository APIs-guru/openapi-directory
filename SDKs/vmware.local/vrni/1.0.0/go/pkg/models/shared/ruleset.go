package shared




type RuleSetRuleSetTypeEnum string

const (
    RuleSetRuleSetTypeEnumNsxStandard RuleSetRuleSetTypeEnum = "NSX_STANDARD"
RuleSetRuleSetTypeEnumNsxRedirect RuleSetRuleSetTypeEnum = "NSX_REDIRECT"
RuleSetRuleSetTypeEnumAwsStandard RuleSetRuleSetTypeEnum = "AWS_STANDARD"
)


type RuleSet struct {
    Firewall *Reference `json:"firewall,omitempty"`
    RuleSetType *RuleSetRuleSetTypeEnum `json:"rule_set_type,omitempty"`
    Rules []Reference `json:"rules,omitempty"`
    
}

