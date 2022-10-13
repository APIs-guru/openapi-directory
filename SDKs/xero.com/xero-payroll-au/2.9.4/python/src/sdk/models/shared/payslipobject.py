from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import payslip


@dataclass_json
@dataclass
class PayslipObject:
    payslip: Optional[payslip.Payslip] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Payslip' }})
    
