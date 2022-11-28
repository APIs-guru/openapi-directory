import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TransferRequest2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=toSourceAccountId" })
  toSourceAccountId: string;
}
