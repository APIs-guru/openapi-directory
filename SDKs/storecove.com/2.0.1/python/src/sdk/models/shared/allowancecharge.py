from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tax
from . import tax


@dataclass_json
@dataclass
class AllowanceCharge:
    amount_excluding_vat: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountExcludingVat' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    reason_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonCode' }})
    tax: tax.Tax = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax' }})
    taxes_duties_fees: Optional[List[tax.Tax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxes_duties_fees' }})
    
