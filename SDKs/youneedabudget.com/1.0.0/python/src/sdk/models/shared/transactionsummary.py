from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TransactionSummaryClearedEnum(str, Enum):
    CLEARED = "cleared"
    UNCLEARED = "uncleared"
    RECONCILED = "reconciled"

class TransactionSummaryFlagColorEnum(str, Enum):
    RED = "red"
    ORANGE = "orange"
    YELLOW = "yellow"
    GREEN = "green"
    BLUE = "blue"
    PURPLE = "purple"


@dataclass_json
@dataclass
class TransactionSummary:
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    amount: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    approved: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved') }})
    cleared: TransactionSummaryClearedEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cleared') }})
    date_: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_id') }})
    flag_color: Optional[TransactionSummaryFlagColorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flag_color') }})
    import_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('import_id') }})
    matched_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matched_transaction_id') }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo') }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_id') }})
    transfer_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer_account_id') }})
    transfer_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer_transaction_id') }})
    
