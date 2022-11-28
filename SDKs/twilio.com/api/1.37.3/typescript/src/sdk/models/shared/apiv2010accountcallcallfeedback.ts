import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CallFeedbackEnumIssuesEnum } from "./callfeedbackenumissuesenum";



export class ApiV2010AccountCallCallFeedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=issues" })
  issues?: CallFeedbackEnumIssuesEnum[];

  @SpeakeasyMetadata({ data: "json, name=quality_score" })
  qualityScore?: number;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;
}
