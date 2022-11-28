import { SpeakeasyBase } from "../../../internal/utils";
import { ReportRecipientConfigJson } from "./reportrecipientconfigjson";
export declare enum ReportRecipientTypeEnum {
    Email = "Email",
    Slack = "Slack"
}
export declare class ReportRecipient extends SpeakeasyBase {
    recipientConfigJson?: ReportRecipientConfigJson;
    type: ReportRecipientTypeEnum;
}
