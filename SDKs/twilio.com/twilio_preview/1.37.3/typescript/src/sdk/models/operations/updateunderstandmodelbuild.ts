import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateUnderstandModelBuildServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateUnderstandModelBuildPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateUnderstandModelBuildSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUnderstandModelBuildRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateUnderstandModelBuildPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest;

  @SpeakeasyMetadata()
  security: UpdateUnderstandModelBuildSecurity;
}


export class UpdateUnderstandModelBuildResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewUnderstandAssistantModelBuild?: shared.PreviewUnderstandAssistantModelBuild;
}
