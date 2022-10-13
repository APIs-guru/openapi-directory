from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import earningsratecalculationtype_enum


@dataclass_json
@dataclass
class EarningsLine:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    annual_salary: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnnualSalary' }})
    calculation_type: Optional[earningsratecalculationtype_enum.EarningsRateCalculationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationType' }})
    earnings_rate_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EarningsRateID' }})
    fixed_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FixedAmount' }})
    normal_number_of_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NormalNumberOfUnits' }})
    number_of_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfUnits' }})
    number_of_units_per_week: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfUnitsPerWeek' }})
    rate_per_unit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RatePerUnit' }})
    
