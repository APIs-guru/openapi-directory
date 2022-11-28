from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Solution:
    bet_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('betNum') }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventId') }})
    handicap: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handicap') }})
    handicap_precision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handicapPrecision') }})
    price_den: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceDen') }})
    price_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceNum') }})
    selection_handicap: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionHandicap') }})
    selection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionId') }})
    
