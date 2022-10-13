from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import rule_target_enum
from . import rule_target_enum


@dataclass_json
@dataclass
class RuleTargetsExclude:
    or_: Optional[List[rule_target_enum.RuleTargetEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'or' }})
    

@dataclass_json
@dataclass
class RuleTargetsInclude:
    or_: Optional[List[rule_target_enum.RuleTargetEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'or' }})
    

@dataclass_json
@dataclass
class RuleTargets:
    exclude: RuleTargetsExclude = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclude' }})
    include: RuleTargetsInclude = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include' }})
    
