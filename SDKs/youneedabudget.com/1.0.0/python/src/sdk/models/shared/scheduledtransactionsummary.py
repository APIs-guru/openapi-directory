from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ScheduledTransactionSummaryFlagColorEnum(str, Enum):
    RED = "red"
    ORANGE = "orange"
    YELLOW = "yellow"
    GREEN = "green"
    BLUE = "blue"
    PURPLE = "purple"

class ScheduledTransactionSummaryFrequencyEnum(str, Enum):
    NEVER = "never"
    DAILY = "daily"
    WEEKLY = "weekly"
    EVERY_OTHER_WEEK = "everyOtherWeek"
    TWICE_A_MONTH = "twiceAMonth"
    EVERY4_WEEKS = "every4Weeks"
    MONTHLY = "monthly"
    EVERY_OTHER_MONTH = "everyOtherMonth"
    EVERY3_MONTHS = "every3Months"
    EVERY4_MONTHS = "every4Months"
    TWICE_A_YEAR = "twiceAYear"
    YEARLY = "yearly"
    EVERY_OTHER_YEAR = "everyOtherYear"


@dataclass_json
@dataclass
class ScheduledTransactionSummary:
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    amount: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    date_first: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_first'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_next: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_next'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    frequency: ScheduledTransactionSummaryFrequencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_id') }})
    flag_color: Optional[ScheduledTransactionSummaryFlagColorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flag_color') }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo') }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_id') }})
    transfer_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer_account_id') }})
    
