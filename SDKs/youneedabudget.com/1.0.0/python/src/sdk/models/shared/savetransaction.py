from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import savesubtransaction

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
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    approved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approved' }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_id' }})
    cleared: Optional[SaveTransactionClearedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cleared' }})
    date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    flag_color: Optional[SaveTransactionFlagColorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flag_color' }})
    import_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'import_id' }})
    memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo' }})
    payee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_id' }})
    payee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_name' }})
    subtransactions: Optional[List[savesubtransaction.SaveSubTransaction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtransactions' }})
    
