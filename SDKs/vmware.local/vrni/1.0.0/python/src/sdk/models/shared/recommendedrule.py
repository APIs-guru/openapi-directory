from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RecommendedRuleActionEnum(str, Enum):
    ALLOW = "ALLOW"
    DROP = "DROP"


@dataclass_json
@dataclass
class RecommendedRule:
    action: Optional[RecommendedRuleActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    destinations: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    port_ranges: Optional[List[SimplePortRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port_ranges') }})
    protocols: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocols') }})
    sources: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
