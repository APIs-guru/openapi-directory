from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import updatetransaction


@dataclass_json
@dataclass
class UpdateTransactionsWrapper:
    transactions: List[updatetransaction.UpdateTransaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    
