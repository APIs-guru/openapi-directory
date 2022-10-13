from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import agent_key
from . import os
from . import timezone

class NodeAddMachineTypeEnum(str, Enum):
    VMWARE = "vmware"
    PHYSICAL = "physical"
    VM = "vm"
    SOLARISZONE = "solariszone"
    QEMU = "qemu"
    XEN = "xen"
    AIXLPAR = "aixlpar"
    HYPERV = "hyperv"
    BSDJAIL = "bsdjail"

class NodeAddPolicyModeEnum(str, Enum):
    ENFORCE = "enforce"
    AUDIT = "audit"

class NodeAddPropertiesTagsEnum(str, Enum):
    SOME = "some"
    TAGS = "tags"


@dataclass_json
@dataclass
class NodeAddPropertiesVars:
    var1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'var1' }})
    vars2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vars2' }})
    

@dataclass_json
@dataclass
class NodeAddProperties:
    env: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'env' }})
    tags: Optional[List[NodeAddPropertiesTagsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    vars: Optional[NodeAddPropertiesVars] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vars' }})
    
class NodeAddStateEnum(str, Enum):
    ENABLE = "enable"
    IGNORED = "ignored"
    EMPTY_POLICIES = "empty-policies"
    INITIALIZING = "initializing"
    PREPARING_EOL = "preparing-eol"

class NodeAddStatusEnum(str, Enum):
    ACCEPTED = "accepted"
    PENDING = "pending"


@dataclass_json
@dataclass
class NodeAdd:
    agent_key: Optional[agent_key.AgentKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentKey' }})
    hostname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip_addresses: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddresses' }})
    machine_type: NodeAddMachineTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineType' }})
    os: os.Os = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    policy_mode: Optional[NodeAddPolicyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyMode' }})
    policy_server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyServerId' }})
    properties: NodeAddProperties = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    state: Optional[NodeAddStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status: NodeAddStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    timezone: Optional[timezone.Timezone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    
