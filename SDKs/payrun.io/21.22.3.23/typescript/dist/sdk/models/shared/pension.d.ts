import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The pensions' pensionable pay codes
**/
export declare class PensionPensionPensionablePayCodes extends SpeakeasyBase {
    payCode?: string[];
}
export declare enum PensionPensionProRataMethodEnum {
    NotSet = "NotSet",
    Annual260Days = "Annual260Days",
    Annual365Days = "Annual365Days",
    AnnualQualifyingDays = "AnnualQualifyingDays",
    DaysPerCalendarMonth = "DaysPerCalendarMonth",
    DaysPerTaxPeriod = "DaysPerTaxPeriod",
    WorkingDaysPerCalendarMonth = "WorkingDaysPerCalendarMonth",
    WeekDaysPerCalendarMonth = "WeekDaysPerCalendarMonth"
}
/**
 * The pensions' qualifying pay codes
**/
export declare class PensionPensionQualifyingPayCodes extends SpeakeasyBase {
    payCode?: string[];
}
export declare enum PensionPensionRasRoundingOverrideEnum {
    NotSet = "NotSet",
    PennyUp = "PennyUp",
    PennyDown = "PennyDown",
    Bankers = "Bankers",
    FiveUp = "FiveUp",
    FiveDown = "FiveDown",
    Floor = "Floor",
    Ceiling = "Ceiling"
}
export declare enum PensionPensionRoundingOptionEnum {
    NotSet = "NotSet",
    PennyUp = "PennyUp",
    PennyDown = "PennyDown",
    Bankers = "Bankers",
    FiveUp = "FiveUp",
    FiveDown = "FiveDown",
    Floor = "Floor",
    Ceiling = "Ceiling"
}
export declare enum PensionPensionTaxationMethodEnum {
    NotSet = "NotSet",
    NetBased = "NetBased",
    ReliefAtSource = "ReliefAtSource",
    TaxReliefExcluded = "TaxReliefExcluded"
}
export declare class PensionPension extends SpeakeasyBase {
    aeCompatible?: boolean;
    code?: string;
    contributionDeductionDay?: number;
    effectiveDate?: Date;
    employeeContributionCash?: number;
    employeeContributionPercent?: number;
    employerContributionCash?: number;
    employerContributionPercent?: number;
    employerNiSaving?: boolean;
    employerNiSavingPercentage?: number;
    group?: string;
    lowerThreshold?: number;
    metaData?: Map<string, any>;
    pensionablePayCodes?: PensionPensionPensionablePayCodes;
    proRataMethod?: PensionPensionProRataMethodEnum;
    providerEmployerRef?: string;
    providerName?: string;
    qualifyingPayCodes?: PensionPensionQualifyingPayCodes;
    rasRoundingOverride?: PensionPensionRasRoundingOverrideEnum;
    revision?: number;
    roundingOption?: PensionPensionRoundingOptionEnum;
    salarySacrifice?: boolean;
    schemeName?: string;
    subGroup?: string;
    taxationMethod?: PensionPensionTaxationMethodEnum;
    upperThreshold?: number;
    useAeThresholds?: boolean;
}
export declare class Pension extends SpeakeasyBase {
    pension?: PensionPension;
}
