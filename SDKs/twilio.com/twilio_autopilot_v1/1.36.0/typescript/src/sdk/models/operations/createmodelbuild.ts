import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEMODELBUILD_SERVERS = [
	"https://autopilot.twilio.com",
];



export class CreateModelBuildPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class CreateModelBuildCreateModelBuildRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateModelBuildSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateModelBuildRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateModelBuildPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateModelBuildCreateModelBuildRequest;

  @Metadata()
  security: CreateModelBuildSecurity;
}


export class CreateModelBuildResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  autopilotV1AssistantModelBuild?: shared.AutopilotV1AssistantModelBuild;
}
