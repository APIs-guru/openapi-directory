import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// StagedEmployeeAdditionalDirectDeposit
/** 
 * The additional direct deposit model
**/
export class StagedEmployeeAdditionalDirectDeposit extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=accountType" })
  accountType?: string;

  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=amountType" })
  amountType?: string;

  @Metadata({ data: "json, name=isSkipPreNote" })
  isSkipPreNote?: boolean;

  @Metadata({ data: "json, name=preNoteDate" })
  preNoteDate?: string;

  @Metadata({ data: "json, name=routingNumber" })
  routingNumber?: string;
}


// StagedEmployeeBenefitSetup
/** 
 * The benefit setup model
**/
export class StagedEmployeeBenefitSetup extends SpeakeasyBase {
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

export enum StagedEmployeeCustomBooleanFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class StagedEmployeeCustomBooleanFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: StagedEmployeeCustomBooleanFieldsCategoryEnum;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: boolean;
}

export enum StagedEmployeeCustomDateFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class StagedEmployeeCustomDateFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: StagedEmployeeCustomDateFieldsCategoryEnum;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}

export enum StagedEmployeeCustomDropDownFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class StagedEmployeeCustomDropDownFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: StagedEmployeeCustomDropDownFieldsCategoryEnum;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}

export enum StagedEmployeeCustomNumberFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class StagedEmployeeCustomNumberFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: StagedEmployeeCustomNumberFieldsCategoryEnum;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: number;
}

export enum StagedEmployeeCustomTextFieldsCategoryEnum {
    PayrollAndHr = "PayrollAndHR"
}


export class StagedEmployeeCustomTextFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: StagedEmployeeCustomTextFieldsCategoryEnum;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}


// StagedEmployeeDepartmentPosition
/** 
 * The Department Position model
**/
export class StagedEmployeeDepartmentPosition extends SpeakeasyBase {
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


// StagedEmployeeFederalTax
/** 
 * The Federal Tax model
**/
export class StagedEmployeeFederalTax extends SpeakeasyBase {
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


// StagedEmployeeHomeAddress
/** 
 * The address model
**/
export class StagedEmployeeHomeAddress extends SpeakeasyBase {
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


// StagedEmployeeLocalTax
/** 
 * The Local Tax model
**/
export class StagedEmployeeLocalTax extends SpeakeasyBase {
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


// StagedEmployeeMainDirectDeposit
/** 
 * The Main Direct Deposit model
**/
export class StagedEmployeeMainDirectDeposit extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=accountType" })
  accountType?: string;

  @Metadata({ data: "json, name=isSkipPreNote" })
  isSkipPreNote?: boolean;

  @Metadata({ data: "json, name=preNoteDate" })
  preNoteDate?: string;

  @Metadata({ data: "json, name=routingNumber" })
  routingNumber?: string;
}


// StagedEmployeeNonPrimaryStateTax
/** 
 * The Non-Primary State Tax model
**/
export class StagedEmployeeNonPrimaryStateTax extends SpeakeasyBase {
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


// StagedEmployeePrimaryPayRate
/** 
 * The Primary Pay Rate model
**/
export class StagedEmployeePrimaryPayRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseRate" })
  baseRate?: number;

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

  @Metadata({ data: "json, name=payType" })
  payType?: string;

  @Metadata({ data: "json, name=ratePer" })
  ratePer?: string;

  @Metadata({ data: "json, name=salary" })
  salary?: number;
}


// StagedEmployeePrimaryStateTax
/** 
 * The State Tax model
**/
export class StagedEmployeePrimaryStateTax extends SpeakeasyBase {
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


// StagedEmployeeStatus
/** 
 * The employee status model
**/
export class StagedEmployeeStatus extends SpeakeasyBase {
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
}


// StagedEmployeeWebTime
/** 
 * Add Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.
**/
export class StagedEmployeeWebTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=badgeNumber" })
  badgeNumber?: string;

  @Metadata({ data: "json, name=chargeRate" })
  chargeRate?: number;

  @Metadata({ data: "json, name=isTimeLaborEnabled" })
  isTimeLaborEnabled?: boolean;
}


// StagedEmployeeWorkAddress
/** 
 * The address model
**/
export class StagedEmployeeWorkAddress extends SpeakeasyBase {
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


// StagedEmployeeWorkEligibility
/** 
 * The Work Eligibility model
**/
export class StagedEmployeeWorkEligibility extends SpeakeasyBase {
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


// StagedEmployee
/** 
 * The staged employee model
**/
export class StagedEmployee extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalDirectDeposit", elemType: shared.StagedEmployeeAdditionalDirectDeposit })
  additionalDirectDeposit?: StagedEmployeeAdditionalDirectDeposit[];

  @Metadata({ data: "json, name=benefitSetup", elemType: shared.StagedEmployeeBenefitSetup })
  benefitSetup?: StagedEmployeeBenefitSetup[];

  @Metadata({ data: "json, name=birthDate" })
  birthDate?: string;

  @Metadata({ data: "json, name=customBooleanFields", elemType: shared.StagedEmployeeCustomBooleanFields })
  customBooleanFields?: StagedEmployeeCustomBooleanFields[];

  @Metadata({ data: "json, name=customDateFields", elemType: shared.StagedEmployeeCustomDateFields })
  customDateFields?: StagedEmployeeCustomDateFields[];

  @Metadata({ data: "json, name=customDropDownFields", elemType: shared.StagedEmployeeCustomDropDownFields })
  customDropDownFields?: StagedEmployeeCustomDropDownFields[];

  @Metadata({ data: "json, name=customNumberFields", elemType: shared.StagedEmployeeCustomNumberFields })
  customNumberFields?: StagedEmployeeCustomNumberFields[];

  @Metadata({ data: "json, name=customTextFields", elemType: shared.StagedEmployeeCustomTextFields })
  customTextFields?: StagedEmployeeCustomTextFields[];

  @Metadata({ data: "json, name=departmentPosition", elemType: shared.StagedEmployeeDepartmentPosition })
  departmentPosition?: StagedEmployeeDepartmentPosition[];

  @Metadata({ data: "json, name=disabilityDescription" })
  disabilityDescription?: string;

  @Metadata({ data: "json, name=employeeId" })
  employeeId?: string;

  @Metadata({ data: "json, name=ethnicity" })
  ethnicity?: string;

  @Metadata({ data: "json, name=federalTax", elemType: shared.StagedEmployeeFederalTax })
  federalTax?: StagedEmployeeFederalTax[];

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=fitwExemptReason" })
  fitwExemptReason?: string;

  @Metadata({ data: "json, name=futaExemptReason" })
  futaExemptReason?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=homeAddress", elemType: shared.StagedEmployeeHomeAddress })
  homeAddress?: StagedEmployeeHomeAddress[];

  @Metadata({ data: "json, name=isEmployee943" })
  isEmployee943?: boolean;

  @Metadata({ data: "json, name=isSmoker" })
  isSmoker?: boolean;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=localTax", elemType: shared.StagedEmployeeLocalTax })
  localTax?: StagedEmployeeLocalTax[];

  @Metadata({ data: "json, name=mainDirectDeposit", elemType: shared.StagedEmployeeMainDirectDeposit })
  mainDirectDeposit?: StagedEmployeeMainDirectDeposit[];

  @Metadata({ data: "json, name=maritalStatus" })
  maritalStatus?: string;

  @Metadata({ data: "json, name=medExemptReason" })
  medExemptReason?: string;

  @Metadata({ data: "json, name=middleName" })
  middleName?: string;

  @Metadata({ data: "json, name=nonPrimaryStateTax", elemType: shared.StagedEmployeeNonPrimaryStateTax })
  nonPrimaryStateTax?: StagedEmployeeNonPrimaryStateTax[];

  @Metadata({ data: "json, name=preferredName" })
  preferredName?: string;

  @Metadata({ data: "json, name=primaryPayRate", elemType: shared.StagedEmployeePrimaryPayRate })
  primaryPayRate?: StagedEmployeePrimaryPayRate[];

  @Metadata({ data: "json, name=primaryStateTax", elemType: shared.StagedEmployeePrimaryStateTax })
  primaryStateTax?: StagedEmployeePrimaryStateTax[];

  @Metadata({ data: "json, name=priorLastName" })
  priorLastName?: string;

  @Metadata({ data: "json, name=salutation" })
  salutation?: string;

  @Metadata({ data: "json, name=sitwExemptReason" })
  sitwExemptReason?: string;

  @Metadata({ data: "json, name=ssExemptReason" })
  ssExemptReason?: string;

  @Metadata({ data: "json, name=ssn" })
  ssn?: string;

  @Metadata({ data: "json, name=status", elemType: shared.StagedEmployeeStatus })
  status?: StagedEmployeeStatus[];

  @Metadata({ data: "json, name=suffix" })
  suffix?: string;

  @Metadata({ data: "json, name=suiExemptReason" })
  suiExemptReason?: string;

  @Metadata({ data: "json, name=suiState" })
  suiState?: string;

  @Metadata({ data: "json, name=taxDistributionCode1099R" })
  taxDistributionCode1099R?: string;

  @Metadata({ data: "json, name=taxForm" })
  taxForm?: string;

  @Metadata({ data: "json, name=veteranDescription" })
  veteranDescription?: string;

  @Metadata({ data: "json, name=webTime" })
  webTime?: StagedEmployeeWebTime;

  @Metadata({ data: "json, name=workAddress", elemType: shared.StagedEmployeeWorkAddress })
  workAddress?: StagedEmployeeWorkAddress[];

  @Metadata({ data: "json, name=workEligibility", elemType: shared.StagedEmployeeWorkEligibility })
  workEligibility?: StagedEmployeeWorkEligibility[];
}
