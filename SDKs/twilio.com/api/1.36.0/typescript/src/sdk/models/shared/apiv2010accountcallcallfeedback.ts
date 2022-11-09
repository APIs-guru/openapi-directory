import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CallFeedbackEnumIssuesEnum } from "./callfeedbackenumissuesenum";


export class ApiV2010AccountCallCallFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=issues" })
  issues?: CallFeedbackEnumIssuesEnum[];

  @Metadata({ data: "json, name=quality_score" })
  qualityScore?: number;

  @Metadata({ data: "json, name=sid" })
  sid?: string;
}
