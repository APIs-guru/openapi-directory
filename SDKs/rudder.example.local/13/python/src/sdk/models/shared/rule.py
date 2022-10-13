from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rule_targets


@dataclass_json
@dataclass
class RuleTags:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class Rule:
    directives: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directives' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    long_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longDescription' }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortDescription' }})
    system: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'system' }})
    tags: Optional[List[RuleTags]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    targets: Optional[List[rule_targets.RuleTargets]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    
