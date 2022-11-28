import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateQueryServerList = [
	"https://autopilot.twilio.com",
] as const;


export class UpdateQueryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateQueryUpdateQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=SampleSid;" })
  sampleSid?: string;

  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status?: string;
}


export class UpdateQuerySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateQueryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateQueryUpdateQueryRequest;

  @SpeakeasyMetadata()
  security: UpdateQuerySecurity;
}


export class UpdateQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  autopilotV1AssistantQuery?: shared.AutopilotV1AssistantQuery;
}
