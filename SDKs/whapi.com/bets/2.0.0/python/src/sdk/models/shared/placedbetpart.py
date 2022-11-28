from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlacedBetPart:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    event_description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventDescription') }})
    event_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventId') }})
    number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    price_den: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceDen') }})
    price_num: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceNum') }})
    price_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceType') }})
    result: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    start_date_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDateTime') }})
    each_way_den: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eachWayDen') }})
    each_way_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eachWayNum') }})
    each_way_places: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eachWayPlaces') }})
    event_market_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventMarketDescription') }})
    event_type_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTypeDescription') }})
    handicap: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handicap') }})
    price_formatted: Optional[PriceFormatted] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceFormatted') }})
    rule4_deductions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule4Deductions') }})
    selection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionId') }})
    
