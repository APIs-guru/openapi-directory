import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TransferRequest2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=toSourceAccountId" })
  toSourceAccountId: string;
}
