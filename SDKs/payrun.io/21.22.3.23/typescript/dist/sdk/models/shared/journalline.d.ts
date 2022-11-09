import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The journal lines' employee
**/
export declare class JournalLineJournalLineEmployee extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
export declare enum JournalLineJournalLinePayFrequencyEnum {
    Weekly = "Weekly",
    Monthly = "Monthly",
    TwoWeekly = "TwoWeekly",
    FourWeekly = "FourWeekly",
    Yearly = "Yearly"
}
/**
 * The journal lines' pay run
**/
export declare class JournalLineJournalLinePayRun extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
/**
 * The journal lines' sub contractor
**/
export declare class JournalLineJournalLineSubContractor extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
export declare class JournalLineJournalLine extends SpeakeasyBase {
    credit?: number;
    debit?: number;
    description?: string;
    employee?: JournalLineJournalLineEmployee;
    generated?: Date;
    grouping?: string;
    ledgerTarget?: string;
    nomCode?: string;
    payFrequency?: JournalLineJournalLinePayFrequencyEnum;
    payRun?: JournalLineJournalLinePayRun;
    subContractor?: JournalLineJournalLineSubContractor;
    subNomCode?: string;
    taxPeriod?: number;
    taxYear?: number;
}
export declare class JournalLine extends SpeakeasyBase {
    journalLine?: JournalLineJournalLine;
}
