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
class BudgetSummary:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    accounts: Optional[List[Account]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    currency_format: Optional[CurrencyFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_format') }})
    date_format: Optional[DateFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_format') }})
    first_month: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_month'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_modified_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_month: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_month'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
