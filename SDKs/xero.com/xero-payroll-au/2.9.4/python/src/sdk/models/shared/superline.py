from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import superannuationcalculationtype_enum
from . import superannuationcontributiontype_enum


@dataclass_json
@dataclass
class SuperLine:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    calculation_type: Optional[superannuationcalculationtype_enum.SuperannuationCalculationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationType' }})
    contribution_type: Optional[superannuationcontributiontype_enum.SuperannuationContributionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContributionType' }})
    expense_account_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpenseAccountCode' }})
    liability_account_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LiabilityAccountCode' }})
    minimum_monthly_earnings: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumMonthlyEarnings' }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Percentage' }})
    super_membership_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuperMembershipID' }})
    
