import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSampleServerList = [
	"https://autopilot.twilio.com",
] as const;


export class CreateSamplePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class CreateSampleCreateSampleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Language;" })
  language: string;

  @SpeakeasyMetadata({ data: "form, name=SourceChannel;" })
  sourceChannel?: string;

  @SpeakeasyMetadata({ data: "form, name=TaggedText;" })
  taggedText: string;
}


export class CreateSampleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSampleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSamplePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSampleCreateSampleRequest;

  @SpeakeasyMetadata()
  security: CreateSampleSecurity;
}


export class CreateSampleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  autopilotV1AssistantTaskSample?: shared.AutopilotV1AssistantTaskSample;
}
