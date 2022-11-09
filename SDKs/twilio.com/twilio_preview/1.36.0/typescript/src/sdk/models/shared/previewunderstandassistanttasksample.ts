import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreviewUnderstandAssistantTaskSample extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=assistant_sid" })
  assistantSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=source_channel" })
  sourceChannel?: string;

  @Metadata({ data: "json, name=tagged_text" })
  taggedText?: string;

  @Metadata({ data: "json, name=task_sid" })
  taskSid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
