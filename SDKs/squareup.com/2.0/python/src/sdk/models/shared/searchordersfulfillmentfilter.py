from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SearchOrdersFulfillmentFilter:
    fulfillment_states: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillment_states' }})
    fulfillment_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillment_types' }})
    
