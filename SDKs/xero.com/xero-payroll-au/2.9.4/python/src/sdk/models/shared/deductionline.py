from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeductionLine:
    calculation_type: DeductionTypeCalculationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationType') }})
    deduction_type_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeductionTypeID') }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    number_of_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfUnits') }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Percentage') }})
    
