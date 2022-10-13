from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import leavelinecalculationtype_enum
from . import employmentterminationpaymenttype_enum
from . import entitlementfinalpaypayouttype_enum


@dataclass_json
@dataclass
class LeaveLine:
    annual_number_of_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnnualNumberOfUnits' }})
    calculation_type: Optional[leavelinecalculationtype_enum.LeaveLineCalculationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationType' }})
    employment_termination_payment_type: Optional[employmentterminationpaymenttype_enum.EmploymentTerminationPaymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmploymentTerminationPaymentType' }})
    entitlement_final_pay_payout_type: Optional[entitlementfinalpaypayouttype_enum.EntitlementFinalPayPayoutTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntitlementFinalPayPayoutType' }})
    full_time_number_of_units_per_period: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullTimeNumberOfUnitsPerPeriod' }})
    include_superannuation_guarantee_contribution: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeSuperannuationGuaranteeContribution' }})
    leave_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LeaveTypeID' }})
    number_of_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfUnits' }})
    
