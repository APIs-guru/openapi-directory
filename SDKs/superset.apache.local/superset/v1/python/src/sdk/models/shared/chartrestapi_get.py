from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChartRestAPIGet:
    cache_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache_timeout') }})
    dashboards: Optional[Meta9] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboards') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    owners: Optional[Meta10] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owners') }})
    params: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    query_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query_context') }})
    slice_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slice_name') }})
    viz_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viz_type') }})
    
