from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    var1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('var1') }})
    vars2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vars2') }})
    

@dataclass_json
@dataclass
class NodeAddProperties:
    r"""NodeAddProperties
    Node properties in \"key\":\"value\" format, where \"key\" is a string, and \"value\" is either a string, a json array, or a json object. The following example shows you three example of &#58; &#173; a json array on the example of \"tags\":[ \"some\", \"tags\" ] &#173; a simple string on the example of \"env\":\"prod\" &#173; a complex json object on the example of \"vars\":{ \"var1\":\"value1\", \"var2\":\"value2\" } They are optional and can be used in any combination as long the keys are unique within the properties object.
    """
    
    env: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('env') }})
    tags: Optional[List[NodeAddPropertiesTagsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    vars: Optional[NodeAddPropertiesVars] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vars') }})
    
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
    hostname: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip_addresses: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddresses') }})
    machine_type: NodeAddMachineTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    os: Os = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    properties: NodeAddProperties = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    status: NodeAddStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    agent_key: Optional[AgentKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentKey') }})
    policy_mode: Optional[NodeAddPolicyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyMode') }})
    policy_server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyServerId') }})
    state: Optional[NodeAddStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    timezone: Optional[Timezone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    
