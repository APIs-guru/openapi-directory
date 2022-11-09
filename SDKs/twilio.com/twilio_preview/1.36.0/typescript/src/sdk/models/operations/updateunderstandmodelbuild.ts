import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEUNDERSTANDMODELBUILD_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateUnderstandModelBuildPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateUnderstandModelBuildSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUnderstandModelBuildRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateUnderstandModelBuildPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest;

  @Metadata()
  security: UpdateUnderstandModelBuildSecurity;
}


export class UpdateUnderstandModelBuildResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewUnderstandAssistantModelBuild?: shared.PreviewUnderstandAssistantModelBuild;
}
