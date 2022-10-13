from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import account
from . import currencyformat
from . import dateformat


@dataclass_json
@dataclass
class BudgetSummary:
    accounts: Optional[List[account.Account]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    currency_format: Optional[currencyformat.CurrencyFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_format' }})
    date_format: Optional[dateformat.DateFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_format' }})
    first_month: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_month', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_modified_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_modified_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_month: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_month', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
