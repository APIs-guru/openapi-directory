import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotationEnumAnsweredByEnum } from "./annotationenumansweredbyenum";
import { AnnotationEnumConnectivityIssueEnum } from "./annotationenumconnectivityissueenum";
export declare class InsightsV1CallAnnotation extends SpeakeasyBase {
    accountSid?: string;
    answeredBy?: AnnotationEnumAnsweredByEnum;
    callScore?: number;
    callSid?: string;
    comment?: string;
    connectivityIssue?: AnnotationEnumConnectivityIssueEnum;
    incident?: string;
    qualityIssues?: string[];
    spam?: boolean;
    url?: string;
}
