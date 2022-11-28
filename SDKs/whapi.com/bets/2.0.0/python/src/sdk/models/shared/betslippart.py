from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Betslippart:
    include_in_multiple: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeInMultiple') }})
    price_den: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceDen') }})
    price_num: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceNum') }})
    price_type: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceType') }})
    selection_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionId') }})
    each_way_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eachWayAvailable') }})
    leg_group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legGroup') }})
    price_changed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceChanged') }})
    single_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleAvailable') }})
    starting_price_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startingPriceAvailable') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_changed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusChanged') }})
    
