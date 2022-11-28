from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BenefitSetup:
    r"""BenefitSetup
    The benefit setup model
    """
    
    benefit_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benefitClass') }})
    benefit_class_effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benefitClassEffectiveDate') }})
    benefit_salary: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benefitSalary') }})
    benefit_salary_effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benefitSalaryEffectiveDate') }})
    do_not_apply_administrative_period: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doNotApplyAdministrativePeriod') }})
    is_measure_aca_eligibility: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMeasureAcaEligibility') }})
    
