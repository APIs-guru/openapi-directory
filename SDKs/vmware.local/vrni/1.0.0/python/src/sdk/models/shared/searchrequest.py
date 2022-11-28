from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchRequest:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursor') }})
    entity_type: Optional[AllEntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    sort_by: Optional[SortByClause] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort_by') }})
    time_range: Optional[TimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_range') }})
    
