from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import controllers_filterdata


@dataclass_json
@dataclass
class ControllersListMeta:
    filter: Optional[dict[str, controllers_filterdata.ControllersFilterData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'search' }})
    sort: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    subtotals: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtotals' }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_items' }})
    
