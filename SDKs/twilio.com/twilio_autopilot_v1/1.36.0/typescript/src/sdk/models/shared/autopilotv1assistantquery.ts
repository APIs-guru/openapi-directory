import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AutopilotV1AssistantQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=assistant_sid" })
  assistantSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=dialogue_sid" })
  dialogueSid?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=model_build_sid" })
  modelBuildSid?: string;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=results" })
  results?: any;

  @Metadata({ data: "json, name=sample_sid" })
  sampleSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=source_channel" })
  sourceChannel?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
