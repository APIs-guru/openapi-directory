import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// EmployeeAdditionalDirectDeposit
/** 
 * The additional direct deposit model
**/
export class EmployeeAdditionalDirectDeposit extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=accountType" })
  accountType?: string;

  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=amountType" })
  amountType?: string;

  @Metadata({ data: "json, name=blockSpecial" })
  blockSpecial?: boolean;

  @Metadata({ data: "json, name=isSkipPreNote" })
  isSkipPreNote?: boolean;

  @Metadata({ data: "json, name=nameOnAccount" })
  nameOnAccount?: string;

  @Metadata({ data: "json, name=preNoteDate" })
  preNoteDate?: string;

  @Metadata({ data: "json, name=routingNumber" })
  routingNumber?: string;
}


// EmployeeAdditionalRate
/** 
 * The additional pay rate model
**/
export class EmployeeAdditionalRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=changeReason" })
  changeReason?: string;

  @Metadata({ data: "json, name=costCenter1" })
  costCenter1?: string;

  @Metadata({ data: "json, name=costCenter2" })
  costCenter2?: string;

  @Metadata({ data: "json, name=costCenter3" })
  costCenter3?: string;

  @Metadata({ data: "json, name=effectiveDate" })
  effectiveDate?: string;

  @Metadata({ data: "json, name=endCheckDate" })
  endCheckDate?: string;

  @Metadata({ data: "json, name=job" })
  job?: string;

  @Metadata({ data: "json, name=rate" })
  rate?: number;

  @Metadata({ data: "json, name=rateCode" })
  rateCode?: string;

  @Metadata({ data: "json, name=rateNotes" })
  rateNotes?: string;

  @Metadata({ data: "json, name=ratePer" })
  ratePer?: string;

  @Metadata({ data: "json, name=shift" })
  shift?: string;
}


// EmployeeBenefitSetup
/** 
 *  Add or update setup values used for employee benefits integration, insurance plan settings, and ACA reporting.
**/
export class EmployeeBenefitSetup extends SpeakeasyBase {
  @Metadata({ data: "json, name=benefitClass" })
  benefitClass?: string;

  @Metadata({ data: "json, name=benefitClassEffectiveDate" })
  benefitClassEffectiveDate?: string;

  @Metadata({ data: "json, name=benefitSalary" })
  benefitSalary?: number;

  @Metadata({ data: "json, name=benefitSalaryEffectiveDate" })
  benefitSalaryEffectiveDate?: string;

  @Metadata({ data: "json, name=doNotApplyAdministrativePeriod" })
  doNotApplyAdministrativePeriod?: boolean;

  @Metadata({ data: "json, name=isMeasureAcaEligibility" })
  isMeasureAcaEligibility?: boolean;
}

export enum EmployeeCustomBooleanFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class EmployeeCustomBooleanFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: EmployeeCustomBooleanFieldsCategoryEnum;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: boolean;
}

export enum EmployeeCustomDateFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class EmployeeCustomDateFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: EmployeeCustomDateFieldsCategoryEnum;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}

export enum EmployeeCustomDropDownFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class EmployeeCustomDropDownFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: EmployeeCustomDropDownFieldsCategoryEnum;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}

export enum EmployeeCustomNumberFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class EmployeeCustomNumberFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: EmployeeCustomNumberFieldsCategoryEnum;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: number;
}

export enum EmployeeCustomTextFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class EmployeeCustomTextFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: EmployeeCustomTextFieldsCategoryEnum;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}


// EmployeeDepartmentPosition
/** 
 * Add or update home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.
**/
export class EmployeeDepartmentPosition extends SpeakeasyBase {
  @Metadata({ data: "json, name=changeReason" })
  changeReason?: string;

  @Metadata({ data: "json, name=clockBadgeNumber" })
  clockBadgeNumber?: string;

  @Metadata({ data: "json, name=costCenter1" })
  costCenter1?: string;

  @Metadata({ data: "json, name=costCenter2" })
  costCenter2?: string;

  @Metadata({ data: "json, name=costCenter3" })
  costCenter3?: string;

  @Metadata({ data: "json, name=effectiveDate" })
  effectiveDate?: string;

  @Metadata({ data: "json, name=employeeType" })
  employeeType?: string;

  @Metadata({ data: "json, name=equalEmploymentOpportunityClass" })
  equalEmploymentOpportunityClass?: string;

  @Metadata({ data: "json, name=isMinimumWageExempt" })
  isMinimumWageExempt?: boolean;

  @Metadata({ data: "json, name=isOvertimeExempt" })
  isOvertimeExempt?: boolean;

  @Metadata({ data: "json, name=isSupervisorReviewer" })
  isSupervisorReviewer?: boolean;

  @Metadata({ data: "json, name=isUnionDuesCollected" })
  isUnionDuesCollected?: boolean;

  @Metadata({ data: "json, name=isUnionInitiationCollected" })
  isUnionInitiationCollected?: boolean;

  @Metadata({ data: "json, name=jobTitle" })
  jobTitle?: string;

  @Metadata({ data: "json, name=payGroup" })
  payGroup?: string;

  @Metadata({ data: "json, name=positionCode" })
  positionCode?: string;

  @Metadata({ data: "json, name=reviewerCompanyNumber" })
  reviewerCompanyNumber?: string;

  @Metadata({ data: "json, name=reviewerEmployeeId" })
  reviewerEmployeeId?: string;

  @Metadata({ data: "json, name=shift" })
  shift?: string;

  @Metadata({ data: "json, name=supervisorCompanyNumber" })
  supervisorCompanyNumber?: string;

  @Metadata({ data: "json, name=supervisorEmployeeId" })
  supervisorEmployeeId?: string;

  @Metadata({ data: "json, name=tipped" })
  tipped?: string;

  @Metadata({ data: "json, name=unionAffiliationDate" })
  unionAffiliationDate?: string;

  @Metadata({ data: "json, name=unionCode" })
  unionCode?: string;

  @Metadata({ data: "json, name=unionPosition" })
  unionPosition?: string;

  @Metadata({ data: "json, name=workersCompensation" })
  workersCompensation?: string;
}


// EmployeeEmergencyContacts
/** 
 * The emergency contact model
**/
export class EmployeeEmergencyContacts extends SpeakeasyBase {
  @Metadata({ data: "json, name=address1" })
  address1?: string;

  @Metadata({ data: "json, name=address2" })
  address2?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=county" })
  county?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName: string;

  @Metadata({ data: "json, name=homePhone" })
  homePhone?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName: string;

  @Metadata({ data: "json, name=mobilePhone" })
  mobilePhone?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=pager" })
  pager?: string;

  @Metadata({ data: "json, name=primaryPhone" })
  primaryPhone?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: string;

  @Metadata({ data: "json, name=relationship" })
  relationship?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=syncEmployeeInfo" })
  syncEmployeeInfo?: boolean;

  @Metadata({ data: "json, name=workExtension" })
  workExtension?: string;

  @Metadata({ data: "json, name=workPhone" })
  workPhone?: string;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}


// EmployeeFederalTax
/** 
 * Add or update federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.
**/
export class EmployeeFederalTax extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=deductionsAmount" })
  deductionsAmount?: number;

  @Metadata({ data: "json, name=dependentsAmount" })
  dependentsAmount?: number;

  @Metadata({ data: "json, name=exemptions" })
  exemptions?: number;

  @Metadata({ data: "json, name=filingStatus" })
  filingStatus?: string;

  @Metadata({ data: "json, name=higherRate" })
  higherRate?: boolean;

  @Metadata({ data: "json, name=otherIncomeAmount" })
  otherIncomeAmount?: number;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;

  @Metadata({ data: "json, name=taxCalculationCode" })
  taxCalculationCode?: string;

  @Metadata({ data: "json, name=w4FormYear" })
  w4FormYear?: number;
}


// EmployeeHomeAddress
/** 
 * Add or update employee's home address, personal phone numbers, and personal email.
**/
export class EmployeeHomeAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=address1" })
  address1?: string;

  @Metadata({ data: "json, name=address2" })
  address2?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=county" })
  county?: string;

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=mobilePhone" })
  mobilePhone?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;
}


// EmployeeLocalTax
/** 
 * The Local Tax model
**/
export class EmployeeLocalTax extends SpeakeasyBase {
  @Metadata({ data: "json, name=exemptions" })
  exemptions?: number;

  @Metadata({ data: "json, name=exemptions2" })
  exemptions2?: number;

  @Metadata({ data: "json, name=filingStatus" })
  filingStatus?: string;

  @Metadata({ data: "json, name=residentPSD" })
  residentPsd?: string;

  @Metadata({ data: "json, name=taxCode" })
  taxCode?: string;

  @Metadata({ data: "json, name=workPSD" })
  workPsd?: string;
}


// EmployeeMainDirectDeposit
/** 
 * Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.
**/
export class EmployeeMainDirectDeposit extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=accountType" })
  accountType?: string;

  @Metadata({ data: "json, name=blockSpecial" })
  blockSpecial?: boolean;

  @Metadata({ data: "json, name=isSkipPreNote" })
  isSkipPreNote?: boolean;

  @Metadata({ data: "json, name=nameOnAccount" })
  nameOnAccount?: string;

  @Metadata({ data: "json, name=preNoteDate" })
  preNoteDate?: string;

  @Metadata({ data: "json, name=routingNumber" })
  routingNumber?: string;
}


// EmployeeNonPrimaryStateTax
/** 
 * Add or update non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.
**/
export class EmployeeNonPrimaryStateTax extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=deductionsAmount" })
  deductionsAmount?: number;

  @Metadata({ data: "json, name=dependentsAmount" })
  dependentsAmount?: number;

  @Metadata({ data: "json, name=exemptions" })
  exemptions?: number;

  @Metadata({ data: "json, name=exemptions2" })
  exemptions2?: number;

  @Metadata({ data: "json, name=filingStatus" })
  filingStatus?: string;

  @Metadata({ data: "json, name=higherRate" })
  higherRate?: boolean;

  @Metadata({ data: "json, name=otherIncomeAmount" })
  otherIncomeAmount?: number;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;

  @Metadata({ data: "json, name=reciprocityCode" })
  reciprocityCode?: string;

  @Metadata({ data: "json, name=specialCheckCalc" })
  specialCheckCalc?: string;

  @Metadata({ data: "json, name=taxCalculationCode" })
  taxCalculationCode?: string;

  @Metadata({ data: "json, name=taxCode" })
  taxCode?: string;

  @Metadata({ data: "json, name=w4FormYear" })
  w4FormYear?: number;
}


// EmployeePrimaryPayRate
/** 
 * Add or update hourly or salary pay rate, effective date, and pay frequency.
**/
export class EmployeePrimaryPayRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=annualSalary" })
  annualSalary?: number;

  @Metadata({ data: "json, name=baseRate" })
  baseRate?: number;

  @Metadata({ data: "json, name=beginCheckDate" })
  beginCheckDate?: string;

  @Metadata({ data: "json, name=changeReason" })
  changeReason?: string;

  @Metadata({ data: "json, name=defaultHours" })
  defaultHours?: number;

  @Metadata({ data: "json, name=effectiveDate" })
  effectiveDate?: string;

  @Metadata({ data: "json, name=isAutoPay" })
  isAutoPay?: boolean;

  @Metadata({ data: "json, name=payFrequency" })
  payFrequency?: string;

  @Metadata({ data: "json, name=payGrade" })
  payGrade?: string;

  @Metadata({ data: "json, name=payRateNote" })
  payRateNote?: string;

  @Metadata({ data: "json, name=payType" })
  payType?: string;

  @Metadata({ data: "json, name=ratePer" })
  ratePer?: string;

  @Metadata({ data: "json, name=salary" })
  salary?: number;
}


// EmployeePrimaryStateTax
/** 
 * Add or update primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed. Sending an updated primary state will replace the current primary state.
**/
export class EmployeePrimaryStateTax extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=deductionsAmount" })
  deductionsAmount?: number;

  @Metadata({ data: "json, name=dependentsAmount" })
  dependentsAmount?: number;

  @Metadata({ data: "json, name=exemptions" })
  exemptions?: number;

  @Metadata({ data: "json, name=exemptions2" })
  exemptions2?: number;

  @Metadata({ data: "json, name=filingStatus" })
  filingStatus?: string;

  @Metadata({ data: "json, name=higherRate" })
  higherRate?: boolean;

  @Metadata({ data: "json, name=otherIncomeAmount" })
  otherIncomeAmount?: number;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;

  @Metadata({ data: "json, name=specialCheckCalc" })
  specialCheckCalc?: string;

  @Metadata({ data: "json, name=taxCalculationCode" })
  taxCalculationCode?: string;

  @Metadata({ data: "json, name=taxCode" })
  taxCode?: string;

  @Metadata({ data: "json, name=w4FormYear" })
  w4FormYear?: number;
}


// EmployeeStatus
/** 
 * Add or update employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.
**/
export class EmployeeStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=adjustedSeniorityDate" })
  adjustedSeniorityDate?: string;

  @Metadata({ data: "json, name=changeReason" })
  changeReason?: string;

  @Metadata({ data: "json, name=effectiveDate" })
  effectiveDate?: string;

  @Metadata({ data: "json, name=employeeStatus" })
  employeeStatus?: string;

  @Metadata({ data: "json, name=hireDate" })
  hireDate?: string;

  @Metadata({ data: "json, name=isEligibleForRehire" })
  isEligibleForRehire?: boolean;

  @Metadata({ data: "json, name=reHireDate" })
  reHireDate?: string;
}


// EmployeeTaxSetup
/** 
 * Add tax form, 1099 exempt reasons and notes, and 943 agricultural employee information. Once the employee receives wages, this information cannot be updated. Add or update SUI tax state, retirement plan, and statutory information.
**/
export class EmployeeTaxSetup extends SpeakeasyBase {
  @Metadata({ data: "json, name=fitwExemptNotes" })
  fitwExemptNotes?: string;

  @Metadata({ data: "json, name=fitwExemptReason" })
  fitwExemptReason?: string;

  @Metadata({ data: "json, name=futaExemptNotes" })
  futaExemptNotes?: string;

  @Metadata({ data: "json, name=futaExemptReason" })
  futaExemptReason?: string;

  @Metadata({ data: "json, name=isEmployee943" })
  isEmployee943?: boolean;

  @Metadata({ data: "json, name=isPension" })
  isPension?: boolean;

  @Metadata({ data: "json, name=isStatutory" })
  isStatutory?: boolean;

  @Metadata({ data: "json, name=medExemptNotes" })
  medExemptNotes?: string;

  @Metadata({ data: "json, name=medExemptReason" })
  medExemptReason?: string;

  @Metadata({ data: "json, name=sitwExemptNotes" })
  sitwExemptNotes?: string;

  @Metadata({ data: "json, name=sitwExemptReason" })
  sitwExemptReason?: string;

  @Metadata({ data: "json, name=ssExemptNotes" })
  ssExemptNotes?: string;

  @Metadata({ data: "json, name=ssExemptReason" })
  ssExemptReason?: string;

  @Metadata({ data: "json, name=suiExemptNotes" })
  suiExemptNotes?: string;

  @Metadata({ data: "json, name=suiExemptReason" })
  suiExemptReason?: string;

  @Metadata({ data: "json, name=suiState" })
  suiState?: string;

  @Metadata({ data: "json, name=taxDistributionCode1099R" })
  taxDistributionCode1099R?: string;

  @Metadata({ data: "json, name=taxForm" })
  taxForm?: string;
}


// EmployeeWebTime
/** 
 * Add or update Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.
**/
export class EmployeeWebTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=badgeNumber" })
  badgeNumber?: string;

  @Metadata({ data: "json, name=chargeRate" })
  chargeRate?: number;

  @Metadata({ data: "json, name=isTimeLaborEnabled" })
  isTimeLaborEnabled?: boolean;
}


// EmployeeWorkAddress
/** 
 * Add or update employee's work address, phone numbers, and email. Work Location drop down field is not included.
**/
export class EmployeeWorkAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=address1" })
  address1?: string;

  @Metadata({ data: "json, name=address2" })
  address2?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=county" })
  county?: string;

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=mailStop" })
  mailStop?: string;

  @Metadata({ data: "json, name=mobilePhone" })
  mobilePhone?: string;

  @Metadata({ data: "json, name=pager" })
  pager?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=phoneExtension" })
  phoneExtension?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;
}


// EmployeeWorkEligibility
/** 
 * Add or update I-9 work authorization information.
**/
export class EmployeeWorkEligibility extends SpeakeasyBase {
  @Metadata({ data: "json, name=alienOrAdmissionDocumentNumber" })
  alienOrAdmissionDocumentNumber?: string;

  @Metadata({ data: "json, name=attestedDate" })
  attestedDate?: string;

  @Metadata({ data: "json, name=countryOfIssuance" })
  countryOfIssuance?: string;

  @Metadata({ data: "json, name=foreignPassportNumber" })
  foreignPassportNumber?: string;

  @Metadata({ data: "json, name=i94AdmissionNumber" })
  i94AdmissionNumber?: string;

  @Metadata({ data: "json, name=i9DateVerified" })
  i9DateVerified?: string;

  @Metadata({ data: "json, name=i9Notes" })
  i9Notes?: string;

  @Metadata({ data: "json, name=isI9Verified" })
  isI9Verified?: boolean;

  @Metadata({ data: "json, name=isSsnVerified" })
  isSsnVerified?: boolean;

  @Metadata({ data: "json, name=ssnDateVerified" })
  ssnDateVerified?: string;

  @Metadata({ data: "json, name=ssnNotes" })
  ssnNotes?: string;

  @Metadata({ data: "json, name=visaType" })
  visaType?: string;

  @Metadata({ data: "json, name=workAuthorization" })
  workAuthorization?: string;

  @Metadata({ data: "json, name=workUntil" })
  workUntil?: string;
}


// Employee
/** 
 * The employee model
**/
export class Employee extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalDirectDeposit", elemType: shared.EmployeeAdditionalDirectDeposit })
  additionalDirectDeposit?: EmployeeAdditionalDirectDeposit[];

  @Metadata({ data: "json, name=additionalRate", elemType: shared.EmployeeAdditionalRate })
  additionalRate?: EmployeeAdditionalRate[];

  @Metadata({ data: "json, name=benefitSetup" })
  benefitSetup?: EmployeeBenefitSetup;

  @Metadata({ data: "json, name=birthDate" })
  birthDate?: string;

  @Metadata({ data: "json, name=companyFEIN" })
  companyFein?: string;

  @Metadata({ data: "json, name=companyName" })
  companyName?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=customBooleanFields", elemType: shared.EmployeeCustomBooleanFields })
  customBooleanFields?: EmployeeCustomBooleanFields[];

  @Metadata({ data: "json, name=customDateFields", elemType: shared.EmployeeCustomDateFields })
  customDateFields?: EmployeeCustomDateFields[];

  @Metadata({ data: "json, name=customDropDownFields", elemType: shared.EmployeeCustomDropDownFields })
  customDropDownFields?: EmployeeCustomDropDownFields[];

  @Metadata({ data: "json, name=customNumberFields", elemType: shared.EmployeeCustomNumberFields })
  customNumberFields?: EmployeeCustomNumberFields[];

  @Metadata({ data: "json, name=customTextFields", elemType: shared.EmployeeCustomTextFields })
  customTextFields?: EmployeeCustomTextFields[];

  @Metadata({ data: "json, name=departmentPosition" })
  departmentPosition?: EmployeeDepartmentPosition;

  @Metadata({ data: "json, name=disabilityDescription" })
  disabilityDescription?: string;

  @Metadata({ data: "json, name=emergencyContacts", elemType: shared.EmployeeEmergencyContacts })
  emergencyContacts?: EmployeeEmergencyContacts[];

  @Metadata({ data: "json, name=employeeId" })
  employeeId?: string;

  @Metadata({ data: "json, name=ethnicity" })
  ethnicity?: string;

  @Metadata({ data: "json, name=federalTax" })
  federalTax?: EmployeeFederalTax;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=homeAddress" })
  homeAddress?: EmployeeHomeAddress;

  @Metadata({ data: "json, name=isHighlyCompensated" })
  isHighlyCompensated?: boolean;

  @Metadata({ data: "json, name=isSmoker" })
  isSmoker?: boolean;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=localTax", elemType: shared.EmployeeLocalTax })
  localTax?: EmployeeLocalTax[];

  @Metadata({ data: "json, name=mainDirectDeposit" })
  mainDirectDeposit?: EmployeeMainDirectDeposit;

  @Metadata({ data: "json, name=maritalStatus" })
  maritalStatus?: string;

  @Metadata({ data: "json, name=middleName" })
  middleName?: string;

  @Metadata({ data: "json, name=nonPrimaryStateTax" })
  nonPrimaryStateTax?: EmployeeNonPrimaryStateTax;

  @Metadata({ data: "json, name=ownerPercent" })
  ownerPercent?: number;

  @Metadata({ data: "json, name=preferredName" })
  preferredName?: string;

  @Metadata({ data: "json, name=primaryPayRate" })
  primaryPayRate?: EmployeePrimaryPayRate;

  @Metadata({ data: "json, name=primaryStateTax" })
  primaryStateTax?: EmployeePrimaryStateTax;

  @Metadata({ data: "json, name=priorLastName" })
  priorLastName?: string;

  @Metadata({ data: "json, name=salutation" })
  salutation?: string;

  @Metadata({ data: "json, name=ssn" })
  ssn?: string;

  @Metadata({ data: "json, name=status" })
  status?: EmployeeStatus;

  @Metadata({ data: "json, name=suffix" })
  suffix?: string;

  @Metadata({ data: "json, name=taxSetup" })
  taxSetup?: EmployeeTaxSetup;

  @Metadata({ data: "json, name=veteranDescription" })
  veteranDescription?: string;

  @Metadata({ data: "json, name=webTime" })
  webTime?: EmployeeWebTime;

  @Metadata({ data: "json, name=workAddress" })
  workAddress?: EmployeeWorkAddress;

  @Metadata({ data: "json, name=workEligibility" })
  workEligibility?: EmployeeWorkEligibility;
}
