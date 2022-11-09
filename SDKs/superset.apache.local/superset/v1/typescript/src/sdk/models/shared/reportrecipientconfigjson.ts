import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReportRecipientConfigJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=target" })
  target?: string;
}
