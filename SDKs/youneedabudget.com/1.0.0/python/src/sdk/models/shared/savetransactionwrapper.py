from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import savetransaction


@dataclass_json
@dataclass
class SaveTransactionWrapper:
    transaction: savetransaction.SaveTransaction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    
