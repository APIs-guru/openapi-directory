import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageFeedbackEnumOutcomeEnum } from "./messagefeedbackenumoutcomeenum";



export class ApiV2010AccountMessageMessageFeedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=message_sid" })
  messageSid?: string;

  @SpeakeasyMetadata({ data: "json, name=outcome" })
  outcome?: MessageFeedbackEnumOutcomeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
