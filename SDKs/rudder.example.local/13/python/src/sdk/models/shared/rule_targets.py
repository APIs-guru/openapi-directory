from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RuleTargetsExclude:
    r"""RuleTargetsExclude
    list of groups to exclude from rule application
    """
    
    or_: Optional[List[RuleTargetEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('or') }})
    

@dataclass_json
@dataclass
class RuleTargetsInclude:
    r"""RuleTargetsInclude
    list of groups to include in rule application
    """
    
    or_: Optional[List[RuleTargetEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('or') }})
    

@dataclass_json
@dataclass
class RuleTargets:
    exclude: RuleTargetsExclude = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclude') }})
    include: RuleTargetsInclude = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('include') }})
    
