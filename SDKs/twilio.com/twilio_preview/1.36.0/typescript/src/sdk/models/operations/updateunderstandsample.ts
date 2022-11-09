import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEUNDERSTANDSAMPLE_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateUnderstandSamplePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class UpdateUnderstandSampleUpdateUnderstandSampleRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Language;" })
  language?: string;

  @Metadata({ data: "form, name=SourceChannel;" })
  sourceChannel?: string;

  @Metadata({ data: "form, name=TaggedText;" })
  taggedText?: string;
}


export class UpdateUnderstandSampleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUnderstandSampleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateUnderstandSamplePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUnderstandSampleUpdateUnderstandSampleRequest;

  @Metadata()
  security: UpdateUnderstandSampleSecurity;
}


export class UpdateUnderstandSampleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewUnderstandAssistantTaskSample?: shared.PreviewUnderstandAssistantTaskSample;
}
