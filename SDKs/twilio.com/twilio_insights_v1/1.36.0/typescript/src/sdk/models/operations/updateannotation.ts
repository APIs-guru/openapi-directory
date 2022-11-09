import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEANNOTATION_SERVERS = [
	"https://insights.twilio.com",
];



export class UpdateAnnotationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}


export class UpdateAnnotationUpdateAnnotationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AnsweredBy;" })
  answeredBy?: shared.AnnotationEnumAnsweredByEnum;

  @Metadata({ data: "form, name=CallScore;" })
  callScore?: number;

  @Metadata({ data: "form, name=Comment;" })
  comment?: string;

  @Metadata({ data: "form, name=ConnectivityIssue;" })
  connectivityIssue?: shared.AnnotationEnumConnectivityIssueEnum;

  @Metadata({ data: "form, name=Incident;" })
  incident?: string;

  @Metadata({ data: "form, name=QualityIssues;" })
  qualityIssues?: string;

  @Metadata({ data: "form, name=Spam;" })
  spam?: boolean;
}


export class UpdateAnnotationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateAnnotationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateAnnotationPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateAnnotationUpdateAnnotationRequest;

  @Metadata()
  security: UpdateAnnotationSecurity;
}


export class UpdateAnnotationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  insightsV1CallAnnotation?: shared.InsightsV1CallAnnotation;
}
