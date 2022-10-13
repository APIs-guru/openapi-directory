from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EmployeeAdditionalDirectDeposit:
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountNumber' }})
    account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountType' }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    amount_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountType' }})
    block_special: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockSpecial' }})
    is_skip_pre_note: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSkipPreNote' }})
    name_on_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameOnAccount' }})
    pre_note_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preNoteDate' }})
    routing_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routingNumber' }})
    

@dataclass_json
@dataclass
class EmployeeAdditionalRate:
    change_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeReason' }})
    cost_center1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costCenter1' }})
    cost_center2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costCenter2' }})
    cost_center3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costCenter3' }})
    effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveDate' }})
    end_check_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endCheckDate' }})
    job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job' }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    rate_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateCode' }})
    rate_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateNotes' }})
    rate_per: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratePer' }})
    shift: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shift' }})
    

@dataclass_json
@dataclass
class EmployeeBenefitSetup:
    benefit_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'benefitClass' }})
    benefit_class_effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'benefitClassEffectiveDate' }})
    benefit_salary: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'benefitSalary' }})
    benefit_salary_effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'benefitSalaryEffectiveDate' }})
    do_not_apply_administrative_period: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doNotApplyAdministrativePeriod' }})
    is_measure_aca_eligibility: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isMeasureAcaEligibility' }})
    
class EmployeeCustomBooleanFieldsCategoryEnum(str, Enum):
    PAYROLL_AND_HR = "PayrollAndHR"


@dataclass_json
@dataclass
class EmployeeCustomBooleanFields:
    category: EmployeeCustomBooleanFieldsCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class EmployeeCustomDateFieldsCategoryEnum(str, Enum):
    PAYROLL_AND_HR = "PayrollAndHR"


@dataclass_json
@dataclass
class EmployeeCustomDateFields:
    category: EmployeeCustomDateFieldsCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class EmployeeCustomDropDownFieldsCategoryEnum(str, Enum):
    PAYROLL_AND_HR = "PayrollAndHR"


@dataclass_json
@dataclass
class EmployeeCustomDropDownFields:
    category: EmployeeCustomDropDownFieldsCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class EmployeeCustomNumberFieldsCategoryEnum(str, Enum):
    PAYROLL_AND_HR = "PayrollAndHR"


@dataclass_json
@dataclass
class EmployeeCustomNumberFields:
    category: EmployeeCustomNumberFieldsCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class EmployeeCustomTextFieldsCategoryEnum(str, Enum):
    PAYROLL_AND_HR = "PayrollAndHR"


@dataclass_json
@dataclass
class EmployeeCustomTextFields:
    category: EmployeeCustomTextFieldsCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class EmployeeDepartmentPosition:
    change_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeReason' }})
    clock_badge_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clockBadgeNumber' }})
    cost_center1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costCenter1' }})
    cost_center2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costCenter2' }})
    cost_center3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costCenter3' }})
    effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveDate' }})
    employee_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employeeType' }})
    equal_employment_opportunity_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'equalEmploymentOpportunityClass' }})
    is_minimum_wage_exempt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isMinimumWageExempt' }})
    is_overtime_exempt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isOvertimeExempt' }})
    is_supervisor_reviewer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSupervisorReviewer' }})
    is_union_dues_collected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isUnionDuesCollected' }})
    is_union_initiation_collected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isUnionInitiationCollected' }})
    job_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTitle' }})
    pay_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payGroup' }})
    position_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positionCode' }})
    reviewer_company_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewerCompanyNumber' }})
    reviewer_employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewerEmployeeId' }})
    shift: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shift' }})
    supervisor_company_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supervisorCompanyNumber' }})
    supervisor_employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supervisorEmployeeId' }})
    tipped: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tipped' }})
    union_affiliation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unionAffiliationDate' }})
    union_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unionCode' }})
    union_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unionPosition' }})
    workers_compensation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workersCompensation' }})
    

@dataclass_json
@dataclass
class EmployeeEmergencyContacts:
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address2' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'county' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    home_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homePhone' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    mobile_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilePhone' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    pager: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pager' }})
    primary_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryPhone' }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    relationship: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationship' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    sync_employee_info: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncEmployeeInfo' }})
    work_extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workExtension' }})
    work_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workPhone' }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zip' }})
    

@dataclass_json
@dataclass
class EmployeeFederalTax:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    deductions_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deductionsAmount' }})
    dependents_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependentsAmount' }})
    exemptions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exemptions' }})
    filing_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filingStatus' }})
    higher_rate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'higherRate' }})
    other_income_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherIncomeAmount' }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    tax_calculation_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxCalculationCode' }})
    w4_form_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'w4FormYear' }})
    

@dataclass_json
@dataclass
class EmployeeHomeAddress:
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address2' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'county' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    mobile_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilePhone' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass_json
@dataclass
class EmployeeLocalTax:
    exemptions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exemptions' }})
    exemptions2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exemptions2' }})
    filing_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filingStatus' }})
    resident_psd: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'residentPSD' }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxCode' }})
    work_psd: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workPSD' }})
    

@dataclass_json
@dataclass
class EmployeeMainDirectDeposit:
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountNumber' }})
    account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountType' }})
    block_special: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockSpecial' }})
    is_skip_pre_note: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSkipPreNote' }})
    name_on_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameOnAccount' }})
    pre_note_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preNoteDate' }})
    routing_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routingNumber' }})
    

@dataclass_json
@dataclass
class EmployeeNonPrimaryStateTax:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    deductions_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deductionsAmount' }})
    dependents_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependentsAmount' }})
    exemptions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exemptions' }})
    exemptions2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exemptions2' }})
    filing_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filingStatus' }})
    higher_rate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'higherRate' }})
    other_income_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherIncomeAmount' }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    reciprocity_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reciprocityCode' }})
    special_check_calc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specialCheckCalc' }})
    tax_calculation_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxCalculationCode' }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxCode' }})
    w4_form_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'w4FormYear' }})
    

@dataclass_json
@dataclass
class EmployeePrimaryPayRate:
    annual_salary: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annualSalary' }})
    base_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseRate' }})
    begin_check_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beginCheckDate' }})
    change_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeReason' }})
    default_hours: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultHours' }})
    effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveDate' }})
    is_auto_pay: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAutoPay' }})
    pay_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payFrequency' }})
    pay_grade: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payGrade' }})
    pay_rate_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payRateNote' }})
    pay_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payType' }})
    rate_per: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratePer' }})
    salary: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salary' }})
    

@dataclass_json
@dataclass
class EmployeePrimaryStateTax:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    deductions_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deductionsAmount' }})
    dependents_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependentsAmount' }})
    exemptions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exemptions' }})
    exemptions2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exemptions2' }})
    filing_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filingStatus' }})
    higher_rate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'higherRate' }})
    other_income_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherIncomeAmount' }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    special_check_calc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specialCheckCalc' }})
    tax_calculation_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxCalculationCode' }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxCode' }})
    w4_form_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'w4FormYear' }})
    

@dataclass_json
@dataclass
class EmployeeStatus:
    adjusted_seniority_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adjustedSeniorityDate' }})
    change_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeReason' }})
    effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveDate' }})
    employee_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employeeStatus' }})
    hire_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hireDate' }})
    is_eligible_for_rehire: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEligibleForRehire' }})
    re_hire_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reHireDate' }})
    

@dataclass_json
@dataclass
class EmployeeTaxSetup:
    fitw_exempt_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fitwExemptNotes' }})
    fitw_exempt_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fitwExemptReason' }})
    futa_exempt_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'futaExemptNotes' }})
    futa_exempt_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'futaExemptReason' }})
    is_employee943: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEmployee943' }})
    is_pension: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPension' }})
    is_statutory: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isStatutory' }})
    med_exempt_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'medExemptNotes' }})
    med_exempt_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'medExemptReason' }})
    sitw_exempt_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sitwExemptNotes' }})
    sitw_exempt_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sitwExemptReason' }})
    ss_exempt_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssExemptNotes' }})
    ss_exempt_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssExemptReason' }})
    sui_exempt_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiExemptNotes' }})
    sui_exempt_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiExemptReason' }})
    sui_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiState' }})
    tax_distribution_code1099_r: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxDistributionCode1099R' }})
    tax_form: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxForm' }})
    

@dataclass_json
@dataclass
class EmployeeWebTime:
    badge_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badgeNumber' }})
    charge_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chargeRate' }})
    is_time_labor_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isTimeLaborEnabled' }})
    

@dataclass_json
@dataclass
class EmployeeWorkAddress:
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address2' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'county' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    mail_stop: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailStop' }})
    mobile_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilePhone' }})
    pager: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pager' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    phone_extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneExtension' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass_json
@dataclass
class EmployeeWorkEligibility:
    alien_or_admission_document_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alienOrAdmissionDocumentNumber' }})
    attested_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attestedDate' }})
    country_of_issuance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryOfIssuance' }})
    foreign_passport_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'foreignPassportNumber' }})
    i94_admission_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'i94AdmissionNumber' }})
    i9_date_verified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'i9DateVerified' }})
    i9_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'i9Notes' }})
    is_i9_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isI9Verified' }})
    is_ssn_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSsnVerified' }})
    ssn_date_verified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssnDateVerified' }})
    ssn_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssnNotes' }})
    visa_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visaType' }})
    work_authorization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workAuthorization' }})
    work_until: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workUntil' }})
    

@dataclass_json
@dataclass
class Employee:
    additional_direct_deposit: Optional[List[EmployeeAdditionalDirectDeposit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalDirectDeposit' }})
    additional_rate: Optional[List[EmployeeAdditionalRate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalRate' }})
    benefit_setup: Optional[EmployeeBenefitSetup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'benefitSetup' }})
    birth_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'birthDate' }})
    company_fein: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyFEIN' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    custom_boolean_fields: Optional[List[EmployeeCustomBooleanFields]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customBooleanFields' }})
    custom_date_fields: Optional[List[EmployeeCustomDateFields]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customDateFields' }})
    custom_drop_down_fields: Optional[List[EmployeeCustomDropDownFields]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customDropDownFields' }})
    custom_number_fields: Optional[List[EmployeeCustomNumberFields]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customNumberFields' }})
    custom_text_fields: Optional[List[EmployeeCustomTextFields]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customTextFields' }})
    department_position: Optional[EmployeeDepartmentPosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departmentPosition' }})
    disability_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabilityDescription' }})
    emergency_contacts: Optional[List[EmployeeEmergencyContacts]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emergencyContacts' }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employeeId' }})
    ethnicity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ethnicity' }})
    federal_tax: Optional[EmployeeFederalTax] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federalTax' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    home_address: Optional[EmployeeHomeAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homeAddress' }})
    is_highly_compensated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isHighlyCompensated' }})
    is_smoker: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSmoker' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    local_tax: Optional[List[EmployeeLocalTax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localTax' }})
    main_direct_deposit: Optional[EmployeeMainDirectDeposit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainDirectDeposit' }})
    marital_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maritalStatus' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'middleName' }})
    non_primary_state_tax: Optional[EmployeeNonPrimaryStateTax] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonPrimaryStateTax' }})
    owner_percent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerPercent' }})
    preferred_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredName' }})
    primary_pay_rate: Optional[EmployeePrimaryPayRate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryPayRate' }})
    primary_state_tax: Optional[EmployeePrimaryStateTax] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryStateTax' }})
    prior_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priorLastName' }})
    salutation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salutation' }})
    ssn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssn' }})
    status: Optional[EmployeeStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suffix' }})
    tax_setup: Optional[EmployeeTaxSetup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxSetup' }})
    veteran_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'veteranDescription' }})
    web_time: Optional[EmployeeWebTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webTime' }})
    work_address: Optional[EmployeeWorkAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workAddress' }})
    work_eligibility: Optional[EmployeeWorkEligibility] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workEligibility' }})
    
