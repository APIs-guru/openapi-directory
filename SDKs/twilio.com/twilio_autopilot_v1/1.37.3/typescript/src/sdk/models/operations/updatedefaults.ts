import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateDefaultsServerList = [
	"https://autopilot.twilio.com",
] as const;


export class UpdateDefaultsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class UpdateDefaultsUpdateDefaultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Defaults;" })
  defaults?: any;
}


export class UpdateDefaultsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateDefaultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateDefaultsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateDefaultsUpdateDefaultsRequest;

  @SpeakeasyMetadata()
  security: UpdateDefaultsSecurity;
}


export class UpdateDefaultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  autopilotV1AssistantDefaults?: shared.AutopilotV1AssistantDefaults;
}
