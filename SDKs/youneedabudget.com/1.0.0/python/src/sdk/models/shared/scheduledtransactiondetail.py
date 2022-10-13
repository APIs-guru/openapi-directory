from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import scheduledsubtransaction

class ScheduledTransactionDetailFlagColorEnum(str, Enum):
    RED = "red"
    ORANGE = "orange"
    YELLOW = "yellow"
    GREEN = "green"
    BLUE = "blue"
    PURPLE = "purple"

class ScheduledTransactionDetailFrequencyEnum(str, Enum):
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
class ScheduledTransactionDetail:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    account_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_name' }})
    amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_id' }})
    category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_name' }})
    date_first: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_first', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_next: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_next', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    flag_color: Optional[ScheduledTransactionDetailFlagColorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flag_color' }})
    frequency: ScheduledTransactionDetailFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo' }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_id' }})
    payee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_name' }})
    subtransactions: List[scheduledsubtransaction.ScheduledSubTransaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtransactions' }})
    transfer_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer_account_id' }})
    
