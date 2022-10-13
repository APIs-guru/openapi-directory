from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import order


@dataclass_json
@dataclass
class UpdateOrderResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    order: Optional[order.Order] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    
