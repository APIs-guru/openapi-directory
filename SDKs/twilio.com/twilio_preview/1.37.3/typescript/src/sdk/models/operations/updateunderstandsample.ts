import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateUnderstandSampleServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateUnderstandSamplePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class UpdateUnderstandSampleUpdateUnderstandSampleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Language;" })
  language?: string;

  @SpeakeasyMetadata({ data: "form, name=SourceChannel;" })
  sourceChannel?: string;

  @SpeakeasyMetadata({ data: "form, name=TaggedText;" })
  taggedText?: string;
}


export class UpdateUnderstandSampleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUnderstandSampleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateUnderstandSamplePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUnderstandSampleUpdateUnderstandSampleRequest;

  @SpeakeasyMetadata()
  security: UpdateUnderstandSampleSecurity;
}


export class UpdateUnderstandSampleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewUnderstandAssistantTaskSample?: shared.PreviewUnderstandAssistantTaskSample;
}
