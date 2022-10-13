from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import employmentbasis_enum
from . import residencystatus_enum
from . import tfnexemptiontype_enum


@dataclass_json
@dataclass
class TaxDeclaration:
    approved_withholding_variation_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovedWithholdingVariationPercentage' }})
    australian_resident_for_tax_purposes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AustralianResidentForTaxPurposes' }})
    eligible_to_receive_leave_loading: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EligibleToReceiveLeaveLoading' }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmployeeID' }})
    employment_basis: Optional[employmentbasis_enum.EmploymentBasisEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmploymentBasis' }})
    has_help_debt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasHELPDebt' }})
    has_sfss_debt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasSFSSDebt' }})
    has_student_startup_loan: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasStudentStartupLoan' }})
    has_trade_support_loan_debt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasTradeSupportLoanDebt' }})
    residency_status: Optional[residencystatus_enum.ResidencyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResidencyStatus' }})
    tfn_exemption_type: Optional[tfnexemptiontype_enum.TfnExemptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TFNExemptionType' }})
    tax_file_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxFileNumber' }})
    tax_free_threshold_claimed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxFreeThresholdClaimed' }})
    tax_offset_estimated_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxOffsetEstimatedAmount' }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedDateUTC' }})
    upward_variation_tax_withholding_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpwardVariationTaxWithholdingAmount' }})
    
