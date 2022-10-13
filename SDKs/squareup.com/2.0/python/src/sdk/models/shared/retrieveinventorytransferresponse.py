from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import inventorytransfer


@dataclass_json
@dataclass
class RetrieveInventoryTransferResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    transfer: Optional[inventorytransfer.InventoryTransfer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer' }})
    
