import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BankAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountName" })
  accountName?: string;

  @Metadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=Amount" })
  amount?: number;

  @Metadata({ data: "json, name=BSB" })
  bsb?: string;

  @Metadata({ data: "json, name=Remainder" })
  remainder?: boolean;

  @Metadata({ data: "json, name=StatementText" })
  statementText?: string;
}
