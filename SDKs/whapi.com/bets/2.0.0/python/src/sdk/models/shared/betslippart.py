from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Betslippart:
    each_way_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eachWayAvailable' }})
    include_in_multiple: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeInMultiple' }})
    leg_group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legGroup' }})
    price_changed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceChanged' }})
    price_den: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceDen' }})
    price_num: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceNum' }})
    price_type: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceType' }})
    selection_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectionId' }})
    single_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'singleAvailable' }})
    starting_price_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startingPriceAvailable' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_changed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusChanged' }})
    
