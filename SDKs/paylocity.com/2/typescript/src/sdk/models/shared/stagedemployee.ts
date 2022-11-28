import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StagedEmployeeAdditionalDirectDeposit
/** 
 * The additional direct deposit model
**/
export class StagedEmployeeAdditionalDirectDeposit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=amountType" })
  amountType?: string;

  @SpeakeasyMetadata({ data: "json, name=isSkipPreNote" })
  isSkipPreNote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=preNoteDate" })
  preNoteDate?: string;

  @SpeakeasyMetadata({ data: "json, name=routingNumber" })
  routingNumber?: string;
}


// StagedEmployeeBenefitSetup
/** 
 * The benefit setup model
**/
export class StagedEmployeeBenefitSetup extends SpeakeasyBase {
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

export enum StagedEmployeeCustomBooleanFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class StagedEmployeeCustomBooleanFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: StagedEmployeeCustomBooleanFieldsCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: boolean;
}

export enum StagedEmployeeCustomDateFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class StagedEmployeeCustomDateFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: StagedEmployeeCustomDateFieldsCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}

export enum StagedEmployeeCustomDropDownFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class StagedEmployeeCustomDropDownFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: StagedEmployeeCustomDropDownFieldsCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}

export enum StagedEmployeeCustomNumberFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class StagedEmployeeCustomNumberFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: StagedEmployeeCustomNumberFieldsCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}

export enum StagedEmployeeCustomTextFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class StagedEmployeeCustomTextFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: StagedEmployeeCustomTextFieldsCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


// StagedEmployeeDepartmentPosition
/** 
 * The Department Position model
**/
export class StagedEmployeeDepartmentPosition extends SpeakeasyBase {
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


// StagedEmployeeFederalTax
/** 
 * The Federal Tax model
**/
export class StagedEmployeeFederalTax extends SpeakeasyBase {
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


// StagedEmployeeHomeAddress
/** 
 * The address model
**/
export class StagedEmployeeHomeAddress extends SpeakeasyBase {
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


// StagedEmployeeLocalTax
/** 
 * The Local Tax model
**/
export class StagedEmployeeLocalTax extends SpeakeasyBase {
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


// StagedEmployeeMainDirectDeposit
/** 
 * The Main Direct Deposit model
**/
export class StagedEmployeeMainDirectDeposit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: string;

  @SpeakeasyMetadata({ data: "json, name=isSkipPreNote" })
  isSkipPreNote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=preNoteDate" })
  preNoteDate?: string;

  @SpeakeasyMetadata({ data: "json, name=routingNumber" })
  routingNumber?: string;
}


// StagedEmployeeNonPrimaryStateTax
/** 
 * The Non-Primary State Tax model
**/
export class StagedEmployeeNonPrimaryStateTax extends SpeakeasyBase {
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


// StagedEmployeePrimaryPayRate
/** 
 * The Primary Pay Rate model
**/
export class StagedEmployeePrimaryPayRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseRate" })
  baseRate?: number;

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

  @SpeakeasyMetadata({ data: "json, name=payType" })
  payType?: string;

  @SpeakeasyMetadata({ data: "json, name=ratePer" })
  ratePer?: string;

  @SpeakeasyMetadata({ data: "json, name=salary" })
  salary?: number;
}


// StagedEmployeePrimaryStateTax
/** 
 * The State Tax model
**/
export class StagedEmployeePrimaryStateTax extends SpeakeasyBase {
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


// StagedEmployeeStatus
/** 
 * The employee status model
**/
export class StagedEmployeeStatus extends SpeakeasyBase {
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
}


// StagedEmployeeWebTime
/** 
 * Add Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.
**/
export class StagedEmployeeWebTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=badgeNumber" })
  badgeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeRate" })
  chargeRate?: number;

  @SpeakeasyMetadata({ data: "json, name=isTimeLaborEnabled" })
  isTimeLaborEnabled?: boolean;
}


// StagedEmployeeWorkAddress
/** 
 * The address model
**/
export class StagedEmployeeWorkAddress extends SpeakeasyBase {
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


// StagedEmployeeWorkEligibility
/** 
 * The Work Eligibility model
**/
export class StagedEmployeeWorkEligibility extends SpeakeasyBase {
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


// StagedEmployee
/** 
 * The staged employee model
**/
export class StagedEmployee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalDirectDeposit", elemType: StagedEmployeeAdditionalDirectDeposit })
  additionalDirectDeposit?: StagedEmployeeAdditionalDirectDeposit[];

  @SpeakeasyMetadata({ data: "json, name=benefitSetup", elemType: StagedEmployeeBenefitSetup })
  benefitSetup?: StagedEmployeeBenefitSetup[];

  @SpeakeasyMetadata({ data: "json, name=birthDate" })
  birthDate?: string;

  @SpeakeasyMetadata({ data: "json, name=customBooleanFields", elemType: StagedEmployeeCustomBooleanFields })
  customBooleanFields?: StagedEmployeeCustomBooleanFields[];

  @SpeakeasyMetadata({ data: "json, name=customDateFields", elemType: StagedEmployeeCustomDateFields })
  customDateFields?: StagedEmployeeCustomDateFields[];

  @SpeakeasyMetadata({ data: "json, name=customDropDownFields", elemType: StagedEmployeeCustomDropDownFields })
  customDropDownFields?: StagedEmployeeCustomDropDownFields[];

  @SpeakeasyMetadata({ data: "json, name=customNumberFields", elemType: StagedEmployeeCustomNumberFields })
  customNumberFields?: StagedEmployeeCustomNumberFields[];

  @SpeakeasyMetadata({ data: "json, name=customTextFields", elemType: StagedEmployeeCustomTextFields })
  customTextFields?: StagedEmployeeCustomTextFields[];

  @SpeakeasyMetadata({ data: "json, name=departmentPosition", elemType: StagedEmployeeDepartmentPosition })
  departmentPosition?: StagedEmployeeDepartmentPosition[];

  @SpeakeasyMetadata({ data: "json, name=disabilityDescription" })
  disabilityDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=employeeId" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=ethnicity" })
  ethnicity?: string;

  @SpeakeasyMetadata({ data: "json, name=federalTax", elemType: StagedEmployeeFederalTax })
  federalTax?: StagedEmployeeFederalTax[];

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=fitwExemptReason" })
  fitwExemptReason?: string;

  @SpeakeasyMetadata({ data: "json, name=futaExemptReason" })
  futaExemptReason?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=homeAddress", elemType: StagedEmployeeHomeAddress })
  homeAddress?: StagedEmployeeHomeAddress[];

  @SpeakeasyMetadata({ data: "json, name=isEmployee943" })
  isEmployee943?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSmoker" })
  isSmoker?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=localTax", elemType: StagedEmployeeLocalTax })
  localTax?: StagedEmployeeLocalTax[];

  @SpeakeasyMetadata({ data: "json, name=mainDirectDeposit", elemType: StagedEmployeeMainDirectDeposit })
  mainDirectDeposit?: StagedEmployeeMainDirectDeposit[];

  @SpeakeasyMetadata({ data: "json, name=maritalStatus" })
  maritalStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=medExemptReason" })
  medExemptReason?: string;

  @SpeakeasyMetadata({ data: "json, name=middleName" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=nonPrimaryStateTax", elemType: StagedEmployeeNonPrimaryStateTax })
  nonPrimaryStateTax?: StagedEmployeeNonPrimaryStateTax[];

  @SpeakeasyMetadata({ data: "json, name=preferredName" })
  preferredName?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryPayRate", elemType: StagedEmployeePrimaryPayRate })
  primaryPayRate?: StagedEmployeePrimaryPayRate[];

  @SpeakeasyMetadata({ data: "json, name=primaryStateTax", elemType: StagedEmployeePrimaryStateTax })
  primaryStateTax?: StagedEmployeePrimaryStateTax[];

  @SpeakeasyMetadata({ data: "json, name=priorLastName" })
  priorLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=salutation" })
  salutation?: string;

  @SpeakeasyMetadata({ data: "json, name=sitwExemptReason" })
  sitwExemptReason?: string;

  @SpeakeasyMetadata({ data: "json, name=ssExemptReason" })
  ssExemptReason?: string;

  @SpeakeasyMetadata({ data: "json, name=ssn" })
  ssn?: string;

  @SpeakeasyMetadata({ data: "json, name=status", elemType: StagedEmployeeStatus })
  status?: StagedEmployeeStatus[];

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;

  @SpeakeasyMetadata({ data: "json, name=suiExemptReason" })
  suiExemptReason?: string;

  @SpeakeasyMetadata({ data: "json, name=suiState" })
  suiState?: string;

  @SpeakeasyMetadata({ data: "json, name=taxDistributionCode1099R" })
  taxDistributionCode1099R?: string;

  @SpeakeasyMetadata({ data: "json, name=taxForm" })
  taxForm?: string;

  @SpeakeasyMetadata({ data: "json, name=veteranDescription" })
  veteranDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=webTime" })
  webTime?: StagedEmployeeWebTime;

  @SpeakeasyMetadata({ data: "json, name=workAddress", elemType: StagedEmployeeWorkAddress })
  workAddress?: StagedEmployeeWorkAddress[];

  @SpeakeasyMetadata({ data: "json, name=workEligibility", elemType: StagedEmployeeWorkEligibility })
  workEligibility?: StagedEmployeeWorkEligibility[];
}
