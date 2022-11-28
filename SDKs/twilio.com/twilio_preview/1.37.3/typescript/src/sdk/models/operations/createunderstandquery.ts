import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateUnderstandQueryServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateUnderstandQueryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class CreateUnderstandQueryCreateUnderstandQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Field;" })
  field?: string;

  @SpeakeasyMetadata({ data: "form, name=Language;" })
  language: string;

  @SpeakeasyMetadata({ data: "form, name=ModelBuild;" })
  modelBuild?: string;

  @SpeakeasyMetadata({ data: "form, name=Query;" })
  query: string;

  @SpeakeasyMetadata({ data: "form, name=Tasks;" })
  tasks?: string;
}


export class CreateUnderstandQuerySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUnderstandQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateUnderstandQueryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUnderstandQueryCreateUnderstandQueryRequest;

  @SpeakeasyMetadata()
  security: CreateUnderstandQuerySecurity;
}


export class CreateUnderstandQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewUnderstandAssistantQuery?: shared.PreviewUnderstandAssistantQuery;
}
