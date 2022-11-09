import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PensionPensionPensionablePayCodes
/** 
 * The pensions' pensionable pay codes
**/
export class PensionPensionPensionablePayCodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=PayCode" })
  payCode?: string[];
}

export enum PensionPensionProRataMethodEnum {
    NotSet = "NotSet"
,    Annual260Days = "Annual260Days"
,    Annual365Days = "Annual365Days"
,    AnnualQualifyingDays = "AnnualQualifyingDays"
,    DaysPerCalendarMonth = "DaysPerCalendarMonth"
,    DaysPerTaxPeriod = "DaysPerTaxPeriod"
,    WorkingDaysPerCalendarMonth = "WorkingDaysPerCalendarMonth"
,    WeekDaysPerCalendarMonth = "WeekDaysPerCalendarMonth"
}


// PensionPensionQualifyingPayCodes
/** 
 * The pensions' qualifying pay codes
**/
export class PensionPensionQualifyingPayCodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=PayCode" })
  payCode?: string[];
}

export enum PensionPensionRasRoundingOverrideEnum {
    NotSet = "NotSet"
,    PennyUp = "PennyUp"
,    PennyDown = "PennyDown"
,    Bankers = "Bankers"
,    FiveUp = "FiveUp"
,    FiveDown = "FiveDown"
,    Floor = "Floor"
,    Ceiling = "Ceiling"
}

export enum PensionPensionRoundingOptionEnum {
    NotSet = "NotSet"
,    PennyUp = "PennyUp"
,    PennyDown = "PennyDown"
,    Bankers = "Bankers"
,    FiveUp = "FiveUp"
,    FiveDown = "FiveDown"
,    Floor = "Floor"
,    Ceiling = "Ceiling"
}

export enum PensionPensionTaxationMethodEnum {
    NotSet = "NotSet"
,    NetBased = "NetBased"
,    ReliefAtSource = "ReliefAtSource"
,    TaxReliefExcluded = "TaxReliefExcluded"
}


export class PensionPension extends SpeakeasyBase {
  @Metadata({ data: "json, name=AECompatible" })
  aeCompatible?: boolean;

  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=ContributionDeductionDay" })
  contributionDeductionDay?: number;

  @Metadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: Date;

  @Metadata({ data: "json, name=EmployeeContributionCash" })
  employeeContributionCash?: number;

  @Metadata({ data: "json, name=EmployeeContributionPercent" })
  employeeContributionPercent?: number;

  @Metadata({ data: "json, name=EmployerContributionCash" })
  employerContributionCash?: number;

  @Metadata({ data: "json, name=EmployerContributionPercent" })
  employerContributionPercent?: number;

  @Metadata({ data: "json, name=EmployerNiSaving" })
  employerNiSaving?: boolean;

  @Metadata({ data: "json, name=EmployerNiSavingPercentage" })
  employerNiSavingPercentage?: number;

  @Metadata({ data: "json, name=Group" })
  group?: string;

  @Metadata({ data: "json, name=LowerThreshold" })
  lowerThreshold?: number;

  @Metadata({ data: "json, name=MetaData" })
  metaData?: Map<string, any>;

  @Metadata({ data: "json, name=PensionablePayCodes" })
  pensionablePayCodes?: PensionPensionPensionablePayCodes;

  @Metadata({ data: "json, name=ProRataMethod" })
  proRataMethod?: PensionPensionProRataMethodEnum;

  @Metadata({ data: "json, name=ProviderEmployerRef" })
  providerEmployerRef?: string;

  @Metadata({ data: "json, name=ProviderName" })
  providerName?: string;

  @Metadata({ data: "json, name=QualifyingPayCodes" })
  qualifyingPayCodes?: PensionPensionQualifyingPayCodes;

  @Metadata({ data: "json, name=RasRoundingOverride" })
  rasRoundingOverride?: PensionPensionRasRoundingOverrideEnum;

  @Metadata({ data: "json, name=Revision" })
  revision?: number;

  @Metadata({ data: "json, name=RoundingOption" })
  roundingOption?: PensionPensionRoundingOptionEnum;

  @Metadata({ data: "json, name=SalarySacrifice" })
  salarySacrifice?: boolean;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName?: string;

  @Metadata({ data: "json, name=SubGroup" })
  subGroup?: string;

  @Metadata({ data: "json, name=TaxationMethod" })
  taxationMethod?: PensionPensionTaxationMethodEnum;

  @Metadata({ data: "json, name=UpperThreshold" })
  upperThreshold?: number;

  @Metadata({ data: "json, name=UseAEThresholds" })
  useAeThresholds?: boolean;
}


export class Pension extends SpeakeasyBase {
  @Metadata({ data: "json, name=Pension" })
  pension?: PensionPension;
}
