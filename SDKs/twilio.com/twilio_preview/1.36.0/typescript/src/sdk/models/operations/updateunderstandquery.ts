import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEUNDERSTANDQUERY_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateUnderstandQueryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateUnderstandQueryUpdateUnderstandQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=SampleSid;" })
  sampleSid?: string;

  @Metadata({ data: "form, name=Status;" })
  status?: string;
}


export class UpdateUnderstandQuerySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUnderstandQueryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateUnderstandQueryPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUnderstandQueryUpdateUnderstandQueryRequest;

  @Metadata()
  security: UpdateUnderstandQuerySecurity;
}


export class UpdateUnderstandQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewUnderstandAssistantQuery?: shared.PreviewUnderstandAssistantQuery;
}
