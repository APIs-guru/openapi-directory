import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESAMPLE_SERVERS = [
	"https://autopilot.twilio.com",
];



export class CreateSamplePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class CreateSampleCreateSampleRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Language;" })
  language: string;

  @Metadata({ data: "form, name=SourceChannel;" })
  sourceChannel?: string;

  @Metadata({ data: "form, name=TaggedText;" })
  taggedText: string;
}


export class CreateSampleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSampleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateSamplePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSampleCreateSampleRequest;

  @Metadata()
  security: CreateSampleSecurity;
}


export class CreateSampleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  autopilotV1AssistantTaskSample?: shared.AutopilotV1AssistantTaskSample;
}
