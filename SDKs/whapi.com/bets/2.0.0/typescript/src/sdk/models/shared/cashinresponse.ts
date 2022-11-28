import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CashInResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}
