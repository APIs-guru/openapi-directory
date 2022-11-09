import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnnotationEnumAnsweredByEnum } from "./annotationenumansweredbyenum";
import { AnnotationEnumConnectivityIssueEnum } from "./annotationenumconnectivityissueenum";


export class InsightsV1CallAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=answered_by" })
  answeredBy?: AnnotationEnumAnsweredByEnum;

  @Metadata({ data: "json, name=call_score" })
  callScore?: number;

  @Metadata({ data: "json, name=call_sid" })
  callSid?: string;

  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=connectivity_issue" })
  connectivityIssue?: AnnotationEnumConnectivityIssueEnum;

  @Metadata({ data: "json, name=incident" })
  incident?: string;

  @Metadata({ data: "json, name=quality_issues" })
  qualityIssues?: string[];

  @Metadata({ data: "json, name=spam" })
  spam?: boolean;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
