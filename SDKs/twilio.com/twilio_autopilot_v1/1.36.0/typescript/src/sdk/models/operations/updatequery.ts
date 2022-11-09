import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEQUERY_SERVERS = [
	"https://autopilot.twilio.com",
];



export class UpdateQueryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateQueryUpdateQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=SampleSid;" })
  sampleSid?: string;

  @Metadata({ data: "form, name=Status;" })
  status?: string;
}


export class UpdateQuerySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateQueryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateQueryPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateQueryUpdateQueryRequest;

  @Metadata()
  security: UpdateQuerySecurity;
}


export class UpdateQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  autopilotV1AssistantQuery?: shared.AutopilotV1AssistantQuery;
}
