import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateUnderstandModelBuildServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateUnderstandModelBuildPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class CreateUnderstandModelBuildCreateUnderstandModelBuildRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateUnderstandModelBuildSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUnderstandModelBuildRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateUnderstandModelBuildPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUnderstandModelBuildCreateUnderstandModelBuildRequest;

  @SpeakeasyMetadata()
  security: CreateUnderstandModelBuildSecurity;
}


export class CreateUnderstandModelBuildResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewUnderstandAssistantModelBuild?: shared.PreviewUnderstandAssistantModelBuild;
}
