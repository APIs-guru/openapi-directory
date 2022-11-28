from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnvironmentUsage:
    end_state: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endState') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    resource_usage: Optional[ResourceUsageDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUsage') }})
    sku: Optional[Sku] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    usage: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    
