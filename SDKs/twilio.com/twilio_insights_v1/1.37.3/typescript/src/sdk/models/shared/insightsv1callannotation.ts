import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnnotationEnumAnsweredByEnum } from "./annotationenumansweredbyenum";
import { AnnotationEnumConnectivityIssueEnum } from "./annotationenumconnectivityissueenum";



export class InsightsV1CallAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=answered_by" })
  answeredBy?: AnnotationEnumAnsweredByEnum;

  @SpeakeasyMetadata({ data: "json, name=call_score" })
  callScore?: number;

  @SpeakeasyMetadata({ data: "json, name=call_sid" })
  callSid?: string;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=connectivity_issue" })
  connectivityIssue?: AnnotationEnumConnectivityIssueEnum;

  @SpeakeasyMetadata({ data: "json, name=incident" })
  incident?: string;

  @SpeakeasyMetadata({ data: "json, name=quality_issues" })
  qualityIssues?: string[];

  @SpeakeasyMetadata({ data: "json, name=spam" })
  spam?: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
