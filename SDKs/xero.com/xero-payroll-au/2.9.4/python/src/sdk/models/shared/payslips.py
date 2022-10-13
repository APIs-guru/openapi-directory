from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import payslip


@dataclass_json
@dataclass
class Payslips:
    payslips: Optional[List[payslip.Payslip]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Payslips' }})
    
