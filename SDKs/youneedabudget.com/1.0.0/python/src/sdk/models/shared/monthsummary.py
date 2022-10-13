from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MonthSummary:
    activity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activity' }})
    age_of_money: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'age_of_money' }})
    budgeted: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'budgeted' }})
    deleted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    income: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'income' }})
    month: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'month', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    to_be_budgeted: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to_be_budgeted' }})
    
