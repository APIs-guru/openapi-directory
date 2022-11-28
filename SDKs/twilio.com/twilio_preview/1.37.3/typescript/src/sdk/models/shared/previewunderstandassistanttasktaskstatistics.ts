import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewUnderstandAssistantTaskTaskStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=assistant_sid" })
  assistantSid?: string;

  @SpeakeasyMetadata({ data: "json, name=fields_count" })
  fieldsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=samples_count" })
  samplesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=task_sid" })
  taskSid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
