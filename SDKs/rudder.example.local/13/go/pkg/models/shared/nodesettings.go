package shared

type NodeSettingsPolicyModeEnum string

const (
	NodeSettingsPolicyModeEnumAudit   NodeSettingsPolicyModeEnum = "audit"
	NodeSettingsPolicyModeEnumEnforce NodeSettingsPolicyModeEnum = "enforce"
	NodeSettingsPolicyModeEnumDefault NodeSettingsPolicyModeEnum = "default"
)

type NodeSettingsProperties struct {
	Name  string      `json:"name"`
	Value interface{} `json:"value"`
}

type NodeSettingsStateEnum string

const (
	NodeSettingsStateEnumEnabled       NodeSettingsStateEnum = "enabled"
	NodeSettingsStateEnumIgnored       NodeSettingsStateEnum = "ignored"
	NodeSettingsStateEnumEmptyPolicies NodeSettingsStateEnum = "empty-policies"
	NodeSettingsStateEnumInitializing  NodeSettingsStateEnum = "initializing"
	NodeSettingsStateEnumPreparingEol  NodeSettingsStateEnum = "preparing-eol"
)

type NodeSettings struct {
	AgentKey   *AgentKey                   `json:"agentKey,omitempty"`
	PolicyMode *NodeSettingsPolicyModeEnum `json:"policyMode,omitempty"`
	Properties []NodeSettingsProperties    `json:"properties,omitempty"`
	State      *NodeSettingsStateEnum      `json:"state,omitempty"`
}
