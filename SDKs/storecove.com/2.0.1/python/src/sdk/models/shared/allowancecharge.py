from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AllowanceCharge:
    amount_excluding_vat: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountExcludingVat') }})
    tax: Tax = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    reason_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonCode') }})
    taxes_duties_fees: Optional[List[Tax]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxes_duties_fees') }})
    
