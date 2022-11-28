from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NonPrimaryStateTax:
    r"""NonPrimaryStateTax
    The Non-Primary State Tax model
    """
    
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    deductions_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deductionsAmount') }})
    dependents_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependentsAmount') }})
    exemptions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptions') }})
    exemptions2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptions2') }})
    filing_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filingStatus') }})
    higher_rate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('higherRate') }})
    other_income_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherIncomeAmount') }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    reciprocity_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reciprocityCode') }})
    special_check_calc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialCheckCalc') }})
    tax_calculation_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxCalculationCode') }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxCode') }})
    w4_form_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('w4FormYear') }})
    
