from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cashdrawershift
from . import error


@dataclass_json
@dataclass
class RetrieveCashDrawerShiftResponse:
    cash_drawer_shift: Optional[cashdrawershift.CashDrawerShift] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cash_drawer_shift' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
