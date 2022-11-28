import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PensionPensionPensionablePayCodes
/** 
 * The pensions' pensionable pay codes
**/
export class PensionPensionPensionablePayCodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PayCode" })
  payCode?: string[];
}

export enum PensionPensionProRataMethodEnum {
    NotSet = "NotSet",
    Annual260Days = "Annual260Days",
    Annual365Days = "Annual365Days",
    AnnualQualifyingDays = "AnnualQualifyingDays",
    DaysPerCalendarMonth = "DaysPerCalendarMonth",
    DaysPerTaxPeriod = "DaysPerTaxPeriod",
    WorkingDaysPerCalendarMonth = "WorkingDaysPerCalendarMonth",
    WeekDaysPerCalendarMonth = "WeekDaysPerCalendarMonth"
}


// PensionPensionQualifyingPayCodes
/** 
 * The pensions' qualifying pay codes
**/
export class PensionPensionQualifyingPayCodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PayCode" })
  payCode?: string[];
}

export enum PensionPensionRasRoundingOverrideEnum {
    NotSet = "NotSet",
    PennyUp = "PennyUp",
    PennyDown = "PennyDown",
    Bankers = "Bankers",
    FiveUp = "FiveUp",
    FiveDown = "FiveDown",
    Floor = "Floor",
    Ceiling = "Ceiling"
}

export enum PensionPensionRoundingOptionEnum {
    NotSet = "NotSet",
    PennyUp = "PennyUp",
    PennyDown = "PennyDown",
    Bankers = "Bankers",
    FiveUp = "FiveUp",
    FiveDown = "FiveDown",
    Floor = "Floor",
    Ceiling = "Ceiling"
}

export enum PensionPensionTaxationMethodEnum {
    NotSet = "NotSet",
    NetBased = "NetBased",
    ReliefAtSource = "ReliefAtSource",
    TaxReliefExcluded = "TaxReliefExcluded"
}


export class PensionPension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AECompatible" })
  aeCompatible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=ContributionDeductionDay" })
  contributionDeductionDay?: number;

  @SpeakeasyMetadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=EmployeeContributionCash" })
  employeeContributionCash?: number;

  @SpeakeasyMetadata({ data: "json, name=EmployeeContributionPercent" })
  employeeContributionPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=EmployerContributionCash" })
  employerContributionCash?: number;

  @SpeakeasyMetadata({ data: "json, name=EmployerContributionPercent" })
  employerContributionPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=EmployerNiSaving" })
  employerNiSaving?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EmployerNiSavingPercentage" })
  employerNiSavingPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=Group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=LowerThreshold" })
  lowerThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=MetaData" })
  metaData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=PensionablePayCodes" })
  pensionablePayCodes?: PensionPensionPensionablePayCodes;

  @SpeakeasyMetadata({ data: "json, name=ProRataMethod" })
  proRataMethod?: PensionPensionProRataMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=ProviderEmployerRef" })
  providerEmployerRef?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderName" })
  providerName?: string;

  @SpeakeasyMetadata({ data: "json, name=QualifyingPayCodes" })
  qualifyingPayCodes?: PensionPensionQualifyingPayCodes;

  @SpeakeasyMetadata({ data: "json, name=RasRoundingOverride" })
  rasRoundingOverride?: PensionPensionRasRoundingOverrideEnum;

  @SpeakeasyMetadata({ data: "json, name=Revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=RoundingOption" })
  roundingOption?: PensionPensionRoundingOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=SalarySacrifice" })
  salarySacrifice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName?: string;

  @SpeakeasyMetadata({ data: "json, name=SubGroup" })
  subGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=TaxationMethod" })
  taxationMethod?: PensionPensionTaxationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=UpperThreshold" })
  upperThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=UseAEThresholds" })
  useAeThresholds?: boolean;
}


export class Pension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Pension" })
  pension?: PensionPension;
}
