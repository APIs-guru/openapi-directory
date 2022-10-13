from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v1settlemententry
from . import v1money


@dataclass_json
@dataclass
class V1Settlement:
    bank_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bank_account_id' }})
    entries: Optional[List[v1settlemententry.V1SettlementEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    initiated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initiated_at' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    total_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_money' }})
    
