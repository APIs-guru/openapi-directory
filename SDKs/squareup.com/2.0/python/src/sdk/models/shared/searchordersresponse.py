from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import orderentry
from . import order


@dataclass_json
@dataclass
class SearchOrdersResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    order_entries: Optional[List[orderentry.OrderEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_entries' }})
    orders: Optional[List[order.Order]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orders' }})
    
