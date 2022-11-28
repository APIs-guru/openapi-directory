from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TransactionDetailClearedEnum(str, Enum):
    CLEARED = "cleared"
    UNCLEARED = "uncleared"
    RECONCILED = "reconciled"

class TransactionDetailFlagColorEnum(str, Enum):
    RED = "red"
    ORANGE = "orange"
    YELLOW = "yellow"
    GREEN = "green"
    BLUE = "blue"
    PURPLE = "purple"


@dataclass_json
@dataclass
class TransactionDetail:
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    account_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_name') }})
    amount: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    approved: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved') }})
    cleared: TransactionDetailClearedEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cleared') }})
    date_: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    subtransactions: List[SubTransaction] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtransactions') }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_id') }})
    category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_name') }})
    flag_color: Optional[TransactionDetailFlagColorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flag_color') }})
    import_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('import_id') }})
    matched_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matched_transaction_id') }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo') }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_id') }})
    payee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_name') }})
    transfer_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer_account_id') }})
    transfer_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer_transaction_id') }})
    
