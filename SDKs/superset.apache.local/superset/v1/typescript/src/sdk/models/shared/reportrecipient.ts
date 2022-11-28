import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportRecipientConfigJson } from "./reportrecipientconfigjson";


export enum ReportRecipientTypeEnum {
    Email = "Email",
    Slack = "Slack"
}


export class ReportRecipient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recipient_config_json" })
  recipientConfigJson?: ReportRecipientConfigJson;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ReportRecipientTypeEnum;
}
