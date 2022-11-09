import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AutopilotV1AssistantDefaults extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=assistant_sid" })
  assistantSid?: string;

  @Metadata({ data: "json, name=data" })
  data?: any;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
