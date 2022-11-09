import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageFeedbackEnumOutcomeEnum } from "./messagefeedbackenumoutcomeenum";


export class ApiV2010AccountMessageMessageFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=message_sid" })
  messageSid?: string;

  @Metadata({ data: "json, name=outcome" })
  outcome?: MessageFeedbackEnumOutcomeEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
