from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PagedListResponseWithTime:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursor') }})
    end_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time') }})
    results: Optional[List[EntityIDWithTime]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    start_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    
