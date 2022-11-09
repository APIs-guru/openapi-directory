import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEDEFAULTS_SERVERS = [
	"https://autopilot.twilio.com",
];



export class UpdateDefaultsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class UpdateDefaultsUpdateDefaultsRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Defaults;" })
  defaults?: any;
}


export class UpdateDefaultsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateDefaultsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateDefaultsPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateDefaultsUpdateDefaultsRequest;

  @Metadata()
  security: UpdateDefaultsSecurity;
}


export class UpdateDefaultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  autopilotV1AssistantDefaults?: shared.AutopilotV1AssistantDefaults;
}
