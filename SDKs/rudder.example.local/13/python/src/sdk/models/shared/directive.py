from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DirectivePolicyModeEnum(str, Enum):
    ENFORCE = "enforce"
    AUDIT = "audit"


@dataclass_json
@dataclass
class DirectiveTags:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class Directive:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    long_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longDescription') }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    policy_mode: Optional[DirectivePolicyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyMode') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortDescription') }})
    system: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    tags: Optional[List[DirectiveTags]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    technique_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('techniqueName') }})
    technique_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('techniqueVersion') }})
    
