import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=BSB" })
  bsb?: string;

  @SpeakeasyMetadata({ data: "json, name=Remainder" })
  remainder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=StatementText" })
  statementText?: string;
}
