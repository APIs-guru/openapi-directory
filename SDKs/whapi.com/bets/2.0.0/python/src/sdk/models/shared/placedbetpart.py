from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import priceformatted


@dataclass_json
@dataclass
class PlacedBetPart:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    each_way_den: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eachWayDen' }})
    each_way_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eachWayNum' }})
    each_way_places: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eachWayPlaces' }})
    event_description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventDescription' }})
    event_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventId' }})
    event_market_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventMarketDescription' }})
    event_type_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTypeDescription' }})
    handicap: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handicap' }})
    number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    price_den: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceDen' }})
    price_formatted: Optional[priceformatted.PriceFormatted] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceFormatted' }})
    price_num: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceNum' }})
    price_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceType' }})
    result: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    rule4_deductions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rule4Deductions' }})
    selection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectionId' }})
    start_date_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDateTime' }})
    
