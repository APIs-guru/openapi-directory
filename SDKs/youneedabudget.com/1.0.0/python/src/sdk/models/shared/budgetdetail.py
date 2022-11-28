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
class BudgetDetail:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    accounts: Optional[List[Account]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    categories: Optional[List[Category]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    category_groups: Optional[List[CategoryGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_groups') }})
    currency_format: Optional[CurrencyFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_format') }})
    date_format: Optional[DateFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_format') }})
    first_month: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_month'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_modified_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_month: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_month'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    months: Optional[List[MonthDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('months') }})
    payee_locations: Optional[List[PayeeLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_locations') }})
    payees: Optional[List[Payee]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payees') }})
    scheduled_subtransactions: Optional[List[ScheduledSubTransaction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduled_subtransactions') }})
    scheduled_transactions: Optional[List[ScheduledTransactionSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduled_transactions') }})
    subtransactions: Optional[List[SubTransaction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtransactions') }})
    transactions: Optional[List[TransactionSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    
