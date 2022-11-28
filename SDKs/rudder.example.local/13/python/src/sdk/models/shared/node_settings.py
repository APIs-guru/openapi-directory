from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class NodeSettingsPolicyModeEnum(str, Enum):
    AUDIT = "audit"
    ENFORCE = "enforce"
    DEFAULT = "default"


@dataclass_json
@dataclass
class NodeSettingsProperties:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class NodeSettingsStateEnum(str, Enum):
    ENABLED = "enabled"
    IGNORED = "ignored"
    EMPTY_POLICIES = "empty-policies"
    INITIALIZING = "initializing"
    PREPARING_EOL = "preparing-eol"


@dataclass_json
@dataclass
class NodeSettings:
    agent_key: Optional[AgentKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentKey') }})
    policy_mode: Optional[NodeSettingsPolicyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyMode') }})
    properties: Optional[List[NodeSettingsProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    state: Optional[NodeSettingsStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
