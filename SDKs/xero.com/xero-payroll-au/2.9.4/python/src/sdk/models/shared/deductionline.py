from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deductiontypecalculationtype_enum


@dataclass_json
@dataclass
class DeductionLine:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    calculation_type: deductiontypecalculationtype_enum.DeductionTypeCalculationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationType' }})
    deduction_type_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeductionTypeID' }})
    number_of_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfUnits' }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Percentage' }})
    
