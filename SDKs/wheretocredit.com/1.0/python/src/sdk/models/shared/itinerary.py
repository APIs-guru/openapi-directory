from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Itinerary:
    segments: List[Segment] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    base_fare_usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseFareUSD') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ticketing_carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketingCarrier') }})
    
