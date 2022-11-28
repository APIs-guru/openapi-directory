from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SaveTransactionClearedEnum(str, Enum):
    CLEARED = "cleared"
    UNCLEARED = "uncleared"
    RECONCILED = "reconciled"

class SaveTransactionFlagColorEnum(str, Enum):
    RED = "red"
    ORANGE = "orange"
    YELLOW = "yellow"
    GREEN = "green"
    BLUE = "blue"
    PURPLE = "purple"


@dataclass_json
@dataclass
class SaveTransaction:
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    amount: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    date_: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    approved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved') }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_id') }})
    cleared: Optional[SaveTransactionClearedEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cleared') }})
    flag_color: Optional[SaveTransactionFlagColorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flag_color') }})
    import_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('import_id') }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo') }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_id') }})
    payee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_name') }})
    subtransactions: Optional[List[SaveSubTransaction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtransactions') }})
    
