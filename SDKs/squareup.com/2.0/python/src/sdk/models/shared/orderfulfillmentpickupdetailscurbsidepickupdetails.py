from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrderFulfillmentPickupDetailsCurbsidePickupDetails:
    buyer_arrived_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer_arrived_at' }})
    curbside_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'curbside_details' }})
    
