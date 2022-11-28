from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SingleBetRequestBody:
    price_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceType') }})
    selection_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionId') }})
    stake: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stake') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    delayed_bet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delayedBetId') }})
    free_bet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeBetId') }})
    price_den: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceDen') }})
    price_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceNum') }})
    
