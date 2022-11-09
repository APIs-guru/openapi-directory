import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEUNDERSTANDMODELBUILD_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateUnderstandModelBuildPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class CreateUnderstandModelBuildCreateUnderstandModelBuildRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateUnderstandModelBuildSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUnderstandModelBuildRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateUnderstandModelBuildPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUnderstandModelBuildCreateUnderstandModelBuildRequest;

  @Metadata()
  security: CreateUnderstandModelBuildSecurity;
}


export class CreateUnderstandModelBuildResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewUnderstandAssistantModelBuild?: shared.PreviewUnderstandAssistantModelBuild;
}
