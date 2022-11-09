import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AutopilotV1AssistantTaskTaskStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=assistant_sid" })
  assistantSid?: string;

  @Metadata({ data: "json, name=fields_count" })
  fieldsCount?: number;

  @Metadata({ data: "json, name=samples_count" })
  samplesCount?: number;

  @Metadata({ data: "json, name=task_sid" })
  taskSid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
