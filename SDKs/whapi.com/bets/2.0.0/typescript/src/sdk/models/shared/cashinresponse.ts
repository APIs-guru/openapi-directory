import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CashInResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=success" })
  success: boolean;
}
