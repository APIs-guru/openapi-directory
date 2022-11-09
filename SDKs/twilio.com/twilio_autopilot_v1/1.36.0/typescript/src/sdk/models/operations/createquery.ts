import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEQUERY_SERVERS = [
	"https://autopilot.twilio.com",
];



export class CreateQueryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class CreateQueryCreateQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Language;" })
  language: string;

  @Metadata({ data: "form, name=ModelBuild;" })
  modelBuild?: string;

  @Metadata({ data: "form, name=Query;" })
  query: string;

  @Metadata({ data: "form, name=Tasks;" })
  tasks?: string;
}


export class CreateQuerySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateQueryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateQueryPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateQueryCreateQueryRequest;

  @Metadata()
  security: CreateQuerySecurity;
}


export class CreateQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  autopilotV1AssistantQuery?: shared.AutopilotV1AssistantQuery;
}
