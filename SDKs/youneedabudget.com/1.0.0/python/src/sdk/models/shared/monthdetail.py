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
class MonthDetail:
    activity: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity') }})
    budgeted: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgeted') }})
    categories: List[Category] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    deleted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    income: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('income') }})
    month: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('month'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    to_be_budgeted: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_be_budgeted') }})
    age_of_money: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('age_of_money') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
