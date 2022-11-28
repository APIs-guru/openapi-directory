from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LocationInfoResult:
    default_auto_suspend_delay_minutes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAutoSuspendDelayMinutes') }})
    skus: Optional[List[SkuInfoResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skus') }})
    
