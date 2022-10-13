from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchRetrieveOrdersRequest:
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    order_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_ids' }})
    
