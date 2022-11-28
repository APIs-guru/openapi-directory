import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AutopilotV1AssistantTaskSample extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=assistant_sid" })
  assistantSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=source_channel" })
  sourceChannel?: string;

  @SpeakeasyMetadata({ data: "json, name=tagged_text" })
  taggedText?: string;

  @SpeakeasyMetadata({ data: "json, name=task_sid" })
  taskSid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
