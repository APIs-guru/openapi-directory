import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmployeeAdditionalDirectDeposit
/** 
 * The additional direct deposit model
**/
export class EmployeeAdditionalDirectDeposit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=amountType" })
  amountType?: string;

  @SpeakeasyMetadata({ data: "json, name=blockSpecial" })
  blockSpecial?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSkipPreNote" })
  isSkipPreNote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nameOnAccount" })
  nameOnAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=preNoteDate" })
  preNoteDate?: string;

  @SpeakeasyMetadata({ data: "json, name=routingNumber" })
  routingNumber?: string;
}


// EmployeeAdditionalRate
/** 
 * The additional pay rate model
**/
export class EmployeeAdditionalRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeReason" })
  changeReason?: string;

  @SpeakeasyMetadata({ data: "json, name=costCenter1" })
  costCenter1?: string;

  @SpeakeasyMetadata({ data: "json, name=costCenter2" })
  costCenter2?: string;

  @SpeakeasyMetadata({ data: "json, name=costCenter3" })
  costCenter3?: string;

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=endCheckDate" })
  endCheckDate?: string;

  @SpeakeasyMetadata({ data: "json, name=job" })
  job?: string;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=rateCode" })
  rateCode?: string;

  @SpeakeasyMetadata({ data: "json, name=rateNotes" })
  rateNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=ratePer" })
  ratePer?: string;

  @SpeakeasyMetadata({ data: "json, name=shift" })
  shift?: string;
}


// EmployeeBenefitSetup
/** 
 *  Add or update setup values used for employee benefits integration, insurance plan settings, and ACA reporting.
**/
export class EmployeeBenefitSetup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=benefitClass" })
  benefitClass?: string;

  @SpeakeasyMetadata({ data: "json, name=benefitClassEffectiveDate" })
  benefitClassEffectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=benefitSalary" })
  benefitSalary?: number;

  @SpeakeasyMetadata({ data: "json, name=benefitSalaryEffectiveDate" })
  benefitSalaryEffectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=doNotApplyAdministrativePeriod" })
  doNotApplyAdministrativePeriod?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isMeasureAcaEligibility" })
  isMeasureAcaEligibility?: boolean;
}

export enum EmployeeCustomBooleanFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class EmployeeCustomBooleanFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: EmployeeCustomBooleanFieldsCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: boolean;
}

export enum EmployeeCustomDateFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class EmployeeCustomDateFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: EmployeeCustomDateFieldsCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}

export enum EmployeeCustomDropDownFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class EmployeeCustomDropDownFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: EmployeeCustomDropDownFieldsCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}

export enum EmployeeCustomNumberFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class EmployeeCustomNumberFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: EmployeeCustomNumberFieldsCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}

export enum EmployeeCustomTextFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class EmployeeCustomTextFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: EmployeeCustomTextFieldsCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


// EmployeeDepartmentPosition
/** 
 * Add or update home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.
**/
export class EmployeeDepartmentPosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeReason" })
  changeReason?: string;

  @SpeakeasyMetadata({ data: "json, name=clockBadgeNumber" })
  clockBadgeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=costCenter1" })
  costCenter1?: string;

  @SpeakeasyMetadata({ data: "json, name=costCenter2" })
  costCenter2?: string;

  @SpeakeasyMetadata({ data: "json, name=costCenter3" })
  costCenter3?: string;

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=employeeType" })
  employeeType?: string;

  @SpeakeasyMetadata({ data: "json, name=equalEmploymentOpportunityClass" })
  equalEmploymentOpportunityClass?: string;

  @SpeakeasyMetadata({ data: "json, name=isMinimumWageExempt" })
  isMinimumWageExempt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isOvertimeExempt" })
  isOvertimeExempt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSupervisorReviewer" })
  isSupervisorReviewer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isUnionDuesCollected" })
  isUnionDuesCollected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isUnionInitiationCollected" })
  isUnionInitiationCollected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jobTitle" })
  jobTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=payGroup" })
  payGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=positionCode" })
  positionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=reviewerCompanyNumber" })
  reviewerCompanyNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=reviewerEmployeeId" })
  reviewerEmployeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=shift" })
  shift?: string;

  @SpeakeasyMetadata({ data: "json, name=supervisorCompanyNumber" })
  supervisorCompanyNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=supervisorEmployeeId" })
  supervisorEmployeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=tipped" })
  tipped?: string;

  @SpeakeasyMetadata({ data: "json, name=unionAffiliationDate" })
  unionAffiliationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=unionCode" })
  unionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=unionPosition" })
  unionPosition?: string;

  @SpeakeasyMetadata({ data: "json, name=workersCompensation" })
  workersCompensation?: string;
}


// EmployeeEmergencyContacts
/** 
 * The emergency contact model
**/
export class EmployeeEmergencyContacts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=homePhone" })
  homePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=mobilePhone" })
  mobilePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=pager" })
  pager?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryPhone" })
  primaryPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "json, name=relationship" })
  relationship?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=syncEmployeeInfo" })
  syncEmployeeInfo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=workExtension" })
  workExtension?: string;

  @SpeakeasyMetadata({ data: "json, name=workPhone" })
  workPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}


// EmployeeFederalTax
/** 
 * Add or update federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.
**/
export class EmployeeFederalTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=deductionsAmount" })
  deductionsAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=dependentsAmount" })
  dependentsAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=exemptions" })
  exemptions?: number;

  @SpeakeasyMetadata({ data: "json, name=filingStatus" })
  filingStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=higherRate" })
  higherRate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=otherIncomeAmount" })
  otherIncomeAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;

  @SpeakeasyMetadata({ data: "json, name=taxCalculationCode" })
  taxCalculationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=w4FormYear" })
  w4FormYear?: number;
}


// EmployeeHomeAddress
/** 
 * Add or update employee's home address, personal phone numbers, and personal email.
**/
export class EmployeeHomeAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=mobilePhone" })
  mobilePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}


// EmployeeLocalTax
/** 
 * The Local Tax model
**/
export class EmployeeLocalTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exemptions" })
  exemptions?: number;

  @SpeakeasyMetadata({ data: "json, name=exemptions2" })
  exemptions2?: number;

  @SpeakeasyMetadata({ data: "json, name=filingStatus" })
  filingStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=residentPSD" })
  residentPsd?: string;

  @SpeakeasyMetadata({ data: "json, name=taxCode" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=workPSD" })
  workPsd?: string;
}


// EmployeeMainDirectDeposit
/** 
 * Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.
**/
export class EmployeeMainDirectDeposit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: string;

  @SpeakeasyMetadata({ data: "json, name=blockSpecial" })
  blockSpecial?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSkipPreNote" })
  isSkipPreNote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nameOnAccount" })
  nameOnAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=preNoteDate" })
  preNoteDate?: string;

  @SpeakeasyMetadata({ data: "json, name=routingNumber" })
  routingNumber?: string;
}


// EmployeeNonPrimaryStateTax
/** 
 * Add or update non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.
**/
export class EmployeeNonPrimaryStateTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=deductionsAmount" })
  deductionsAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=dependentsAmount" })
  dependentsAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=exemptions" })
  exemptions?: number;

  @SpeakeasyMetadata({ data: "json, name=exemptions2" })
  exemptions2?: number;

  @SpeakeasyMetadata({ data: "json, name=filingStatus" })
  filingStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=higherRate" })
  higherRate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=otherIncomeAmount" })
  otherIncomeAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;

  @SpeakeasyMetadata({ data: "json, name=reciprocityCode" })
  reciprocityCode?: string;

  @SpeakeasyMetadata({ data: "json, name=specialCheckCalc" })
  specialCheckCalc?: string;

  @SpeakeasyMetadata({ data: "json, name=taxCalculationCode" })
  taxCalculationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=taxCode" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=w4FormYear" })
  w4FormYear?: number;
}


// EmployeePrimaryPayRate
/** 
 * Add or update hourly or salary pay rate, effective date, and pay frequency.
**/
export class EmployeePrimaryPayRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annualSalary" })
  annualSalary?: number;

  @SpeakeasyMetadata({ data: "json, name=baseRate" })
  baseRate?: number;

  @SpeakeasyMetadata({ data: "json, name=beginCheckDate" })
  beginCheckDate?: string;

  @SpeakeasyMetadata({ data: "json, name=changeReason" })
  changeReason?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultHours" })
  defaultHours?: number;

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=isAutoPay" })
  isAutoPay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=payFrequency" })
  payFrequency?: string;

  @SpeakeasyMetadata({ data: "json, name=payGrade" })
  payGrade?: string;

  @SpeakeasyMetadata({ data: "json, name=payRateNote" })
  payRateNote?: string;

  @SpeakeasyMetadata({ data: "json, name=payType" })
  payType?: string;

  @SpeakeasyMetadata({ data: "json, name=ratePer" })
  ratePer?: string;

  @SpeakeasyMetadata({ data: "json, name=salary" })
  salary?: number;
}


// EmployeePrimaryStateTax
/** 
 * Add or update primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed. Sending an updated primary state will replace the current primary state.
**/
export class EmployeePrimaryStateTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=deductionsAmount" })
  deductionsAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=dependentsAmount" })
  dependentsAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=exemptions" })
  exemptions?: number;

  @SpeakeasyMetadata({ data: "json, name=exemptions2" })
  exemptions2?: number;

  @SpeakeasyMetadata({ data: "json, name=filingStatus" })
  filingStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=higherRate" })
  higherRate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=otherIncomeAmount" })
  otherIncomeAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;

  @SpeakeasyMetadata({ data: "json, name=specialCheckCalc" })
  specialCheckCalc?: string;

  @SpeakeasyMetadata({ data: "json, name=taxCalculationCode" })
  taxCalculationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=taxCode" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=w4FormYear" })
  w4FormYear?: number;
}


// EmployeeStatus
/** 
 * Add or update employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.
**/
export class EmployeeStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adjustedSeniorityDate" })
  adjustedSeniorityDate?: string;

  @SpeakeasyMetadata({ data: "json, name=changeReason" })
  changeReason?: string;

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=employeeStatus" })
  employeeStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=hireDate" })
  hireDate?: string;

  @SpeakeasyMetadata({ data: "json, name=isEligibleForRehire" })
  isEligibleForRehire?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reHireDate" })
  reHireDate?: string;
}


// EmployeeTaxSetup
/** 
 * Add tax form, 1099 exempt reasons and notes, and 943 agricultural employee information. Once the employee receives wages, this information cannot be updated. Add or update SUI tax state, retirement plan, and statutory information.
**/
export class EmployeeTaxSetup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fitwExemptNotes" })
  fitwExemptNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=fitwExemptReason" })
  fitwExemptReason?: string;

  @SpeakeasyMetadata({ data: "json, name=futaExemptNotes" })
  futaExemptNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=futaExemptReason" })
  futaExemptReason?: string;

  @SpeakeasyMetadata({ data: "json, name=isEmployee943" })
  isEmployee943?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPension" })
  isPension?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isStatutory" })
  isStatutory?: boolean;

  @SpeakeasyMetadata({ data: "json, name=medExemptNotes" })
  medExemptNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=medExemptReason" })
  medExemptReason?: string;

  @SpeakeasyMetadata({ data: "json, name=sitwExemptNotes" })
  sitwExemptNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=sitwExemptReason" })
  sitwExemptReason?: string;

  @SpeakeasyMetadata({ data: "json, name=ssExemptNotes" })
  ssExemptNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=ssExemptReason" })
  ssExemptReason?: string;

  @SpeakeasyMetadata({ data: "json, name=suiExemptNotes" })
  suiExemptNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=suiExemptReason" })
  suiExemptReason?: string;

  @SpeakeasyMetadata({ data: "json, name=suiState" })
  suiState?: string;

  @SpeakeasyMetadata({ data: "json, name=taxDistributionCode1099R" })
  taxDistributionCode1099R?: string;

  @SpeakeasyMetadata({ data: "json, name=taxForm" })
  taxForm?: string;
}


// EmployeeWebTime
/** 
 * Add or update Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.
**/
export class EmployeeWebTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=badgeNumber" })
  badgeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeRate" })
  chargeRate?: number;

  @SpeakeasyMetadata({ data: "json, name=isTimeLaborEnabled" })
  isTimeLaborEnabled?: boolean;
}


// EmployeeWorkAddress
/** 
 * Add or update employee's work address, phone numbers, and email. Work Location drop down field is not included.
**/
export class EmployeeWorkAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=mailStop" })
  mailStop?: string;

  @SpeakeasyMetadata({ data: "json, name=mobilePhone" })
  mobilePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=pager" })
  pager?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneExtension" })
  phoneExtension?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}


// EmployeeWorkEligibility
/** 
 * Add or update I-9 work authorization information.
**/
export class EmployeeWorkEligibility extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alienOrAdmissionDocumentNumber" })
  alienOrAdmissionDocumentNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=attestedDate" })
  attestedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=countryOfIssuance" })
  countryOfIssuance?: string;

  @SpeakeasyMetadata({ data: "json, name=foreignPassportNumber" })
  foreignPassportNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=i94AdmissionNumber" })
  i94AdmissionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=i9DateVerified" })
  i9DateVerified?: string;

  @SpeakeasyMetadata({ data: "json, name=i9Notes" })
  i9Notes?: string;

  @SpeakeasyMetadata({ data: "json, name=isI9Verified" })
  isI9Verified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSsnVerified" })
  isSsnVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ssnDateVerified" })
  ssnDateVerified?: string;

  @SpeakeasyMetadata({ data: "json, name=ssnNotes" })
  ssnNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=visaType" })
  visaType?: string;

  @SpeakeasyMetadata({ data: "json, name=workAuthorization" })
  workAuthorization?: string;

  @SpeakeasyMetadata({ data: "json, name=workUntil" })
  workUntil?: string;
}


// Employee
/** 
 * The employee model
**/
export class Employee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalDirectDeposit", elemType: EmployeeAdditionalDirectDeposit })
  additionalDirectDeposit?: EmployeeAdditionalDirectDeposit[];

  @SpeakeasyMetadata({ data: "json, name=additionalRate", elemType: EmployeeAdditionalRate })
  additionalRate?: EmployeeAdditionalRate[];

  @SpeakeasyMetadata({ data: "json, name=benefitSetup" })
  benefitSetup?: EmployeeBenefitSetup;

  @SpeakeasyMetadata({ data: "json, name=birthDate" })
  birthDate?: string;

  @SpeakeasyMetadata({ data: "json, name=companyFEIN" })
  companyFein?: string;

  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=customBooleanFields", elemType: EmployeeCustomBooleanFields })
  customBooleanFields?: EmployeeCustomBooleanFields[];

  @SpeakeasyMetadata({ data: "json, name=customDateFields", elemType: EmployeeCustomDateFields })
  customDateFields?: EmployeeCustomDateFields[];

  @SpeakeasyMetadata({ data: "json, name=customDropDownFields", elemType: EmployeeCustomDropDownFields })
  customDropDownFields?: EmployeeCustomDropDownFields[];

  @SpeakeasyMetadata({ data: "json, name=customNumberFields", elemType: EmployeeCustomNumberFields })
  customNumberFields?: EmployeeCustomNumberFields[];

  @SpeakeasyMetadata({ data: "json, name=customTextFields", elemType: EmployeeCustomTextFields })
  customTextFields?: EmployeeCustomTextFields[];

  @SpeakeasyMetadata({ data: "json, name=departmentPosition" })
  departmentPosition?: EmployeeDepartmentPosition;

  @SpeakeasyMetadata({ data: "json, name=disabilityDescription" })
  disabilityDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=emergencyContacts", elemType: EmployeeEmergencyContacts })
  emergencyContacts?: EmployeeEmergencyContacts[];

  @SpeakeasyMetadata({ data: "json, name=employeeId" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=ethnicity" })
  ethnicity?: string;

  @SpeakeasyMetadata({ data: "json, name=federalTax" })
  federalTax?: EmployeeFederalTax;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=homeAddress" })
  homeAddress?: EmployeeHomeAddress;

  @SpeakeasyMetadata({ data: "json, name=isHighlyCompensated" })
  isHighlyCompensated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSmoker" })
  isSmoker?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=localTax", elemType: EmployeeLocalTax })
  localTax?: EmployeeLocalTax[];

  @SpeakeasyMetadata({ data: "json, name=mainDirectDeposit" })
  mainDirectDeposit?: EmployeeMainDirectDeposit;

  @SpeakeasyMetadata({ data: "json, name=maritalStatus" })
  maritalStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=middleName" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=nonPrimaryStateTax" })
  nonPrimaryStateTax?: EmployeeNonPrimaryStateTax;

  @SpeakeasyMetadata({ data: "json, name=ownerPercent" })
  ownerPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=preferredName" })
  preferredName?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryPayRate" })
  primaryPayRate?: EmployeePrimaryPayRate;

  @SpeakeasyMetadata({ data: "json, name=primaryStateTax" })
  primaryStateTax?: EmployeePrimaryStateTax;

  @SpeakeasyMetadata({ data: "json, name=priorLastName" })
  priorLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=salutation" })
  salutation?: string;

  @SpeakeasyMetadata({ data: "json, name=ssn" })
  ssn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: EmployeeStatus;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;

  @SpeakeasyMetadata({ data: "json, name=taxSetup" })
  taxSetup?: EmployeeTaxSetup;

  @SpeakeasyMetadata({ data: "json, name=veteranDescription" })
  veteranDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=webTime" })
  webTime?: EmployeeWebTime;

  @SpeakeasyMetadata({ data: "json, name=workAddress" })
  workAddress?: EmployeeWorkAddress;

  @SpeakeasyMetadata({ data: "json, name=workEligibility" })
  workEligibility?: EmployeeWorkEligibility;
}
