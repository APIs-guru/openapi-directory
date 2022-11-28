


export enum RuleTargetEnum {
    SpecialAll = "special:all",
    SpecialAllExceptPolicyServers = "special:all_exceptPolicyServers",
    SpecialAllServersWithRole = "special:all_servers_with_role",
    SpecialAllNodesWithoutRole = "special:all_nodes_without_role",
    PolicyServerDollarPolicyServerId = "policyServer:${policyServerId}",
    GroupDollarNodeGroupId = "group:${nodeGroupId}"
}
