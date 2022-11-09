import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JournalLineJournalLineEmployee
/** 
 * The journal lines' employee
**/
export class JournalLineJournalLineEmployee extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}

export enum JournalLineJournalLinePayFrequencyEnum {
    Weekly = "Weekly"
,    Monthly = "Monthly"
,    TwoWeekly = "TwoWeekly"
,    FourWeekly = "FourWeekly"
,    Yearly = "Yearly"
}


// JournalLineJournalLinePayRun
/** 
 * The journal lines' pay run
**/
export class JournalLineJournalLinePayRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}


// JournalLineJournalLineSubContractor
/** 
 * The journal lines' sub contractor
**/
export class JournalLineJournalLineSubContractor extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}


export class JournalLineJournalLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=Credit" })
  credit?: number;

  @Metadata({ data: "json, name=Debit" })
  debit?: number;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Employee" })
  employee?: JournalLineJournalLineEmployee;

  @Metadata({ data: "json, name=Generated" })
  generated?: Date;

  @Metadata({ data: "json, name=Grouping" })
  grouping?: string;

  @Metadata({ data: "json, name=LedgerTarget" })
  ledgerTarget?: string;

  @Metadata({ data: "json, name=NomCode" })
  nomCode?: string;

  @Metadata({ data: "json, name=PayFrequency" })
  payFrequency?: JournalLineJournalLinePayFrequencyEnum;

  @Metadata({ data: "json, name=PayRun" })
  payRun?: JournalLineJournalLinePayRun;

  @Metadata({ data: "json, name=SubContractor" })
  subContractor?: JournalLineJournalLineSubContractor;

  @Metadata({ data: "json, name=SubNomCode" })
  subNomCode?: string;

  @Metadata({ data: "json, name=TaxPeriod" })
  taxPeriod?: number;

  @Metadata({ data: "json, name=TaxYear" })
  taxYear?: number;
}


export class JournalLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=JournalLine" })
  journalLine?: JournalLineJournalLine;
}
