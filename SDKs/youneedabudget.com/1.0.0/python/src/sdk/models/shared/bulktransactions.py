from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import savetransaction


@dataclass_json
@dataclass
class BulkTransactions:
    transactions: List[savetransaction.SaveTransaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    
