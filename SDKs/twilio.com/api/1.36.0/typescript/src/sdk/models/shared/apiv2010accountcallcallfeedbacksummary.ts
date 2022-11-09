import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CallFeedbackSummaryEnumStatusEnum } from "./callfeedbacksummaryenumstatusenum";


export class ApiV2010AccountCallCallFeedbackSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=call_count" })
  callCount?: number;

  @Metadata({ data: "json, name=call_feedback_count" })
  callFeedbackCount?: number;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=end_date" })
  endDate?: Date;

  @Metadata({ data: "json, name=include_subaccounts" })
  includeSubaccounts?: boolean;

  @Metadata({ data: "json, name=issues" })
  issues?: any[];

  @Metadata({ data: "json, name=quality_score_average" })
  qualityScoreAverage?: number;

  @Metadata({ data: "json, name=quality_score_median" })
  qualityScoreMedian?: number;

  @Metadata({ data: "json, name=quality_score_standard_deviation" })
  qualityScoreStandardDeviation?: number;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=start_date" })
  startDate?: Date;

  @Metadata({ data: "json, name=status" })
  status?: CallFeedbackSummaryEnumStatusEnum;
}
