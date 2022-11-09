import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEUNDERSTANDSAMPLE_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateUnderstandSamplePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class CreateUnderstandSampleCreateUnderstandSampleRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Language;" })
  language: string;

  @Metadata({ data: "form, name=SourceChannel;" })
  sourceChannel?: string;

  @Metadata({ data: "form, name=TaggedText;" })
  taggedText: string;
}


export class CreateUnderstandSampleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUnderstandSampleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateUnderstandSamplePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUnderstandSampleCreateUnderstandSampleRequest;

  @Metadata()
  security: CreateUnderstandSampleSecurity;
}


export class CreateUnderstandSampleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewUnderstandAssistantTaskSample?: shared.PreviewUnderstandAssistantTaskSample;
}
