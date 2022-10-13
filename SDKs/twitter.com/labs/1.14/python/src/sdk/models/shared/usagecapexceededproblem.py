from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UsageCapExceededProblemPeriodEnum(str, Enum):
    DAILY = "Daily"
    MONTHLY = "Monthly"

class UsageCapExceededProblemScopeEnum(str, Enum):
    ACCOUNT = "Account"
    PRODUCT = "Product"


@dataclass_json
@dataclass
class UsageCapExceededProblem:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    period: Optional[UsageCapExceededProblemPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    scope: Optional[UsageCapExceededProblemScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
