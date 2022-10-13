from dataclasses import dataclass, field
from typing import Enum

class RuleTargetEnum(str, Enum):
    SPECIAL_ALL = "special:all"
    SPECIAL_ALL_EXCEPT_POLICY_SERVERS = "special:all_exceptPolicyServers"
    SPECIAL_ALL_SERVERS_WITH_ROLE = "special:all_servers_with_role"
    SPECIAL_ALL_NODES_WITHOUT_ROLE = "special:all_nodes_without_role"
    POLICY_SERVER_DOLLAR_POLICY_SERVER_ID_ = "policyServer:${policyServerId}"
    GROUP_DOLLAR_NODE_GROUP_ID_ = "group:${nodeGroupId}"

