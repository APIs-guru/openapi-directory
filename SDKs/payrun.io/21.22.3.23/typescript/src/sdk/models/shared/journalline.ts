import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JournalLineJournalLineEmployee
/** 
 * The journal lines' employee
**/
export class JournalLineJournalLineEmployee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}

export enum JournalLineJournalLinePayFrequencyEnum {
    Weekly = "Weekly",
    Monthly = "Monthly",
    TwoWeekly = "TwoWeekly",
    FourWeekly = "FourWeekly",
    Yearly = "Yearly"
}


// JournalLineJournalLinePayRun
/** 
 * The journal lines' pay run
**/
export class JournalLineJournalLinePayRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}


// JournalLineJournalLineSubContractor
/** 
 * The journal lines' sub contractor
**/
export class JournalLineJournalLineSubContractor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}


export class JournalLineJournalLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Credit" })
  credit?: number;

  @SpeakeasyMetadata({ data: "json, name=Debit" })
  debit?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Employee" })
  employee?: JournalLineJournalLineEmployee;

  @SpeakeasyMetadata({ data: "json, name=Generated" })
  generated?: Date;

  @SpeakeasyMetadata({ data: "json, name=Grouping" })
  grouping?: string;

  @SpeakeasyMetadata({ data: "json, name=LedgerTarget" })
  ledgerTarget?: string;

  @SpeakeasyMetadata({ data: "json, name=NomCode" })
  nomCode?: string;

  @SpeakeasyMetadata({ data: "json, name=PayFrequency" })
  payFrequency?: JournalLineJournalLinePayFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=PayRun" })
  payRun?: JournalLineJournalLinePayRun;

  @SpeakeasyMetadata({ data: "json, name=SubContractor" })
  subContractor?: JournalLineJournalLineSubContractor;

  @SpeakeasyMetadata({ data: "json, name=SubNomCode" })
  subNomCode?: string;

  @SpeakeasyMetadata({ data: "json, name=TaxPeriod" })
  taxPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxYear" })
  taxYear?: number;
}


export class JournalLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JournalLine" })
  journalLine?: JournalLineJournalLine;
}
