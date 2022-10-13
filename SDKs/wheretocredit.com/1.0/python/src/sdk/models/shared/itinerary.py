from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import segment


@dataclass_json
@dataclass
class Itinerary:
    base_fare_usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseFareUSD' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    segments: List[segment.Segment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    ticketing_carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ticketingCarrier' }})
    
