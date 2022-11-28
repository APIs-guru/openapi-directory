from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ControllersListMeta:
    filter: Optional[dict[str, ControllersFilterData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search') }})
    sort: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort') }})
    subtotals: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtotals') }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_items') }})
    
