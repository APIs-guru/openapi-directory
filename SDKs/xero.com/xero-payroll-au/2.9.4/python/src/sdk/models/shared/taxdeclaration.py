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
class TaxDeclaration:
    approved_withholding_variation_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovedWithholdingVariationPercentage') }})
    australian_resident_for_tax_purposes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AustralianResidentForTaxPurposes') }})
    eligible_to_receive_leave_loading: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EligibleToReceiveLeaveLoading') }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeID') }})
    employment_basis: Optional[EmploymentBasisEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmploymentBasis') }})
    has_help_debt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasHELPDebt') }})
    has_sfss_debt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasSFSSDebt') }})
    has_student_startup_loan: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasStudentStartupLoan') }})
    has_trade_support_loan_debt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasTradeSupportLoanDebt') }})
    residency_status: Optional[ResidencyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResidencyStatus') }})
    tfn_exemption_type: Optional[TfnExemptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TFNExemptionType') }})
    tax_file_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxFileNumber') }})
    tax_free_threshold_claimed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxFreeThresholdClaimed') }})
    tax_offset_estimated_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxOffsetEstimatedAmount') }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDateUTC') }})
    upward_variation_tax_withholding_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpwardVariationTaxWithholdingAmount') }})
    

@dataclass_json
@dataclass
class TaxDeclarationInput:
    approved_withholding_variation_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovedWithholdingVariationPercentage') }})
    australian_resident_for_tax_purposes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AustralianResidentForTaxPurposes') }})
    eligible_to_receive_leave_loading: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EligibleToReceiveLeaveLoading') }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeID') }})
    employment_basis: Optional[EmploymentBasisEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmploymentBasis') }})
    has_help_debt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasHELPDebt') }})
    has_sfss_debt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasSFSSDebt') }})
    has_student_startup_loan: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasStudentStartupLoan') }})
    has_trade_support_loan_debt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasTradeSupportLoanDebt') }})
    residency_status: Optional[ResidencyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResidencyStatus') }})
    tfn_exemption_type: Optional[TfnExemptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TFNExemptionType') }})
    tax_file_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxFileNumber') }})
    tax_free_threshold_claimed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxFreeThresholdClaimed') }})
    tax_offset_estimated_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxOffsetEstimatedAmount') }})
    upward_variation_tax_withholding_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpwardVariationTaxWithholdingAmount') }})
    
