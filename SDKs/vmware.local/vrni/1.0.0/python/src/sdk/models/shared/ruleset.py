from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RuleSetRuleSetTypeEnum(str, Enum):
    NSX_STANDARD = "NSX_STANDARD"
    NSX_REDIRECT = "NSX_REDIRECT"
    AWS_STANDARD = "AWS_STANDARD"


@dataclass_json
@dataclass
class RuleSet:
    firewall: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewall') }})
    rule_set_type: Optional[RuleSetRuleSetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule_set_type') }})
    rules: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
