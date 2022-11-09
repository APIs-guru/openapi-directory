import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportRecipientConfigJson } from "./reportrecipientconfigjson";

export enum ReportRecipientTypeEnum {
    Email = "Email"
,    Slack = "Slack"
}


export class ReportRecipient extends SpeakeasyBase {
  @Metadata({ data: "json, name=recipient_config_json" })
  recipientConfigJson?: ReportRecipientConfigJson;

  @Metadata({ data: "json, name=type" })
  type: ReportRecipientTypeEnum;
}
