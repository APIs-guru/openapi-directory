from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BetPlaced:
    receipt: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('receipt') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    num_lines: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numLines') }})
    number: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    placed_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placedDateTime') }})
    total_stake: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalStake') }})
    
