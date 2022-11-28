import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportRecipientConfigJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;
}
