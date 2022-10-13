from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import supplierparty


@dataclass_json
@dataclass
class AccountingSupplierParty:
    party: Optional[supplierparty.SupplierParty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party' }})
    
