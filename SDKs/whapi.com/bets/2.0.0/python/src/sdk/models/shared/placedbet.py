from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlacedBet:
    estimated_returns: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedReturns') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    settled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settled') }})
    stake: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stake') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    trans_date_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transDateTime') }})
    type_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeCode') }})
    type_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeName') }})
    winnings: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('winnings') }})
    cashin_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cashinValue') }})
    free_bet_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeBetValue') }})
    legs: Optional[List[PlacedBetLeg]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legs') }})
    num_lines: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numLines') }})
    num_selections: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numSelections') }})
    receipt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receipt') }})
    stake_per_line: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stakePerLine') }})
    
