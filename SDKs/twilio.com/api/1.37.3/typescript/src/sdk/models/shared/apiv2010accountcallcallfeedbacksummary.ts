import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CallFeedbackSummaryEnumStatusEnum } from "./callfeedbacksummaryenumstatusenum";



export class ApiV2010AccountCallCallFeedbackSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=call_count" })
  callCount?: number;

  @SpeakeasyMetadata({ data: "json, name=call_feedback_count" })
  callFeedbackCount?: number;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=include_subaccounts" })
  includeSubaccounts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=issues" })
  issues?: any[];

  @SpeakeasyMetadata({ data: "json, name=quality_score_average" })
  qualityScoreAverage?: number;

  @SpeakeasyMetadata({ data: "json, name=quality_score_median" })
  qualityScoreMedian?: number;

  @SpeakeasyMetadata({ data: "json, name=quality_score_standard_deviation" })
  qualityScoreStandardDeviation?: number;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CallFeedbackSummaryEnumStatusEnum;
}
