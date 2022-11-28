import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateAnnotationServerList = [
	"https://insights.twilio.com",
] as const;


export class UpdateAnnotationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}


export class UpdateAnnotationUpdateAnnotationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AnsweredBy;" })
  answeredBy?: shared.AnnotationEnumAnsweredByEnum;

  @SpeakeasyMetadata({ data: "form, name=CallScore;" })
  callScore?: number;

  @SpeakeasyMetadata({ data: "form, name=Comment;" })
  comment?: string;

  @SpeakeasyMetadata({ data: "form, name=ConnectivityIssue;" })
  connectivityIssue?: shared.AnnotationEnumConnectivityIssueEnum;

  @SpeakeasyMetadata({ data: "form, name=Incident;" })
  incident?: string;

  @SpeakeasyMetadata({ data: "form, name=QualityIssues;" })
  qualityIssues?: string;

  @SpeakeasyMetadata({ data: "form, name=Spam;" })
  spam?: boolean;
}


export class UpdateAnnotationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateAnnotationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateAnnotationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateAnnotationUpdateAnnotationRequest;

  @SpeakeasyMetadata()
  security: UpdateAnnotationSecurity;
}


export class UpdateAnnotationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  insightsV1CallAnnotation?: shared.InsightsV1CallAnnotation;
}
