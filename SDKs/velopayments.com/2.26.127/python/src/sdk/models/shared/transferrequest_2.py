from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TransferRequest2:
    amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    to_source_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toSourceAccountId' }})
    
