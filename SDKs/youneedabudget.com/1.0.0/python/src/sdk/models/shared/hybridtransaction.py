from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class HybridTransactionClearedEnum(str, Enum):
    CLEARED = "cleared"
    UNCLEARED = "uncleared"
    RECONCILED = "reconciled"

class HybridTransactionFlagColorEnum(str, Enum):
    RED = "red"
    ORANGE = "orange"
    YELLOW = "yellow"
    GREEN = "green"
    BLUE = "blue"
    PURPLE = "purple"

class HybridTransactionTypeEnum(str, Enum):
    TRANSACTION = "transaction"
    SUBTRANSACTION = "subtransaction"


@dataclass_json
@dataclass
class HybridTransaction:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    account_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_name' }})
    amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    approved: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approved' }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_id' }})
    category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_name' }})
    cleared: HybridTransactionClearedEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cleared' }})
    date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    flag_color: Optional[HybridTransactionFlagColorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flag_color' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    import_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'import_id' }})
    matched_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matched_transaction_id' }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo' }})
    parent_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_transaction_id' }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_id' }})
    payee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_name' }})
    transfer_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer_account_id' }})
    transfer_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer_transaction_id' }})
    type: HybridTransactionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
