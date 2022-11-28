from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UsageCapExceededProblemPeriodEnum(str, Enum):
    DAILY = "Daily"
    MONTHLY = "Monthly"

class UsageCapExceededProblemScopeEnum(str, Enum):
    ACCOUNT = "Account"
    PRODUCT = "Product"


@dataclass_json
@dataclass
class UsageCapExceededProblem:
    r"""UsageCapExceededProblem
    A problem that indicates that a usage cap has been exceeded.
    """
    
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    period: Optional[UsageCapExceededProblemPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    scope: Optional[UsageCapExceededProblemScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
