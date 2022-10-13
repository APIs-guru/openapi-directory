from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import savetransaction
from . import savetransaction


@dataclass_json
@dataclass
class SaveTransactionsWrapper:
    transaction: Optional[savetransaction.SaveTransaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    transactions: Optional[List[savetransaction.SaveTransaction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    
