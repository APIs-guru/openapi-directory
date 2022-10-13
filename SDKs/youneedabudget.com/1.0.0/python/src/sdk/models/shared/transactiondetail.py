from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import subtransaction

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
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    account_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_name' }})
    amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    approved: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approved' }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_id' }})
    category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_name' }})
    cleared: TransactionDetailClearedEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cleared' }})
    date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    flag_color: Optional[TransactionDetailFlagColorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flag_color' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    import_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'import_id' }})
    matched_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matched_transaction_id' }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo' }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_id' }})
    payee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_name' }})
    subtransactions: List[subtransaction.SubTransaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtransactions' }})
    transfer_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer_account_id' }})
    transfer_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer_transaction_id' }})
    
