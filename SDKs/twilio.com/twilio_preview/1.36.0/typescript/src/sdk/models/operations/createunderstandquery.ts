import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEUNDERSTANDQUERY_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateUnderstandQueryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class CreateUnderstandQueryCreateUnderstandQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Field;" })
  field?: string;

  @Metadata({ data: "form, name=Language;" })
  language: string;

  @Metadata({ data: "form, name=ModelBuild;" })
  modelBuild?: string;

  @Metadata({ data: "form, name=Query;" })
  query: string;

  @Metadata({ data: "form, name=Tasks;" })
  tasks?: string;
}


export class CreateUnderstandQuerySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUnderstandQueryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateUnderstandQueryPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUnderstandQueryCreateUnderstandQueryRequest;

  @Metadata()
  security: CreateUnderstandQuerySecurity;
}


export class CreateUnderstandQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewUnderstandAssistantQuery?: shared.PreviewUnderstandAssistantQuery;
}
