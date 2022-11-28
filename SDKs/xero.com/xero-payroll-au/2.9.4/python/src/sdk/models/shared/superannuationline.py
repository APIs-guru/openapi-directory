from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuperannuationLine:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    calculation_type: Optional[SuperannuationCalculationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationType') }})
    contribution_type: Optional[SuperannuationContributionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContributionType') }})
    expense_account_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpenseAccountCode') }})
    liability_account_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LiabilityAccountCode') }})
    minimum_monthly_earnings: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumMonthlyEarnings') }})
    payment_date_for_this_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentDateForThisPeriod') }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Percentage') }})
    super_membership_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperMembershipID') }})
    
