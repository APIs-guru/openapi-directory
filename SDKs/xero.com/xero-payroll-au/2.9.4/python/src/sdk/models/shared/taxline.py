from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaxLine:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    liability_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LiabilityAccount') }})
    manual_tax_type: Optional[ManualTaxTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManualTaxType') }})
    payslip_tax_line_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayslipTaxLineID') }})
    tax_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxTypeName') }})
    
