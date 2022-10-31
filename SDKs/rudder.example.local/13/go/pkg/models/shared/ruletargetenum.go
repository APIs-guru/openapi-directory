package shared




type RuleTargetEnum string

const (
    RuleTargetEnumSpecialAll RuleTargetEnum = "special:all"
RuleTargetEnumSpecialAllExceptPolicyServers RuleTargetEnum = "special:all_exceptPolicyServers"
RuleTargetEnumSpecialAllServersWithRole RuleTargetEnum = "special:all_servers_with_role"
RuleTargetEnumSpecialAllNodesWithoutRole RuleTargetEnum = "special:all_nodes_without_role"
RuleTargetEnumPolicyServerDollarPolicyServerID RuleTargetEnum = "policyServer:${policyServerId}"
RuleTargetEnumGroupDollarNodeGroupID RuleTargetEnum = "group:${nodeGroupId}"
)


