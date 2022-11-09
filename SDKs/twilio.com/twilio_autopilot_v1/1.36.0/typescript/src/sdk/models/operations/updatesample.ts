import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESAMPLE_SERVERS = [
	"https://autopilot.twilio.com",
];



export class UpdateSamplePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class UpdateSampleUpdateSampleRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Language;" })
  language?: string;

  @Metadata({ data: "form, name=SourceChannel;" })
  sourceChannel?: string;

  @Metadata({ data: "form, name=TaggedText;" })
  taggedText?: string;
}


export class UpdateSampleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSampleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSamplePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSampleUpdateSampleRequest;

  @Metadata()
  security: UpdateSampleSecurity;
}


export class UpdateSampleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  autopilotV1AssistantTaskSample?: shared.AutopilotV1AssistantTaskSample;
}
