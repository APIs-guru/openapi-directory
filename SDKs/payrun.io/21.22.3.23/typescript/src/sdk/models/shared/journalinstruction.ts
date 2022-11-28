import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum JournalInstructionJournalInstructionAccountingTypeEnum {
    Credit = "Credit",
    Debit = "Debit"
}


export class JournalInstructionJournalInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountingType" })
  accountingType?: JournalInstructionJournalInstructionAccountingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Expression" })
  expression?: string;

  @SpeakeasyMetadata({ data: "json, name=JournalLineTag" })
  journalLineTag?: string;

  @SpeakeasyMetadata({ data: "json, name=LedgerTarget" })
  ledgerTarget?: string;

  @SpeakeasyMetadata({ data: "json, name=NomCode" })
  nomCode?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=SubNomCode" })
  subNomCode?: string;
}


export class JournalInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JournalInstruction" })
  journalInstruction?: JournalInstructionJournalInstruction;
}
